const Redis = require('ioredis');
const redis = new Redis();

const cache = (req, res, next) => {
  const cacheKey = req.originalUrl;

  redis.get(cacheKey, (err, data) => {
    console.log('redis client connected');
    if (err) {
      console.error('Redis error:', err);
      next();
    } else if (data) {
      // Cache hit, serve cached data
      console.log('Cache hit');
      const cachedData = JSON.parse(data);
      res.json(cachedData);
    } else {
      // Cache miss, continue to the route handler
      console.log('Cache Miss')
      res.sendResponse = res.json;
      res.json = (data) => {
        redis.setex(cacheKey, 300, JSON.stringify(data)); // Set cache duration to 15 minutes
        res.sendResponse(data);
      };
      next();
    }
  });
};

module.exports = cache;