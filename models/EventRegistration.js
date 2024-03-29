const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventRegistrationSchema = new Schema({
  eventId: {
    type: String,
    ref: 'Event', 
    required: true
  },
  user : [
    {  
      userId : 
         { 
           type: Schema.Types.ObjectId,
           ref: 'User', 
           required: true
        },
        name :
         { 
          type: String,
          required: true
         } , 
         isDeleted : {
            type : Boolean,
            default : false
         }
    } 
  ]
}, { timestamps: true });

const EventRegistration = mongoose.model('EventRegistration', eventRegistrationSchema);

module.exports = EventRegistration;
