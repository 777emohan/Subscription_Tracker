import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Subscription Name is required'],
        trim: true,
        MinLength: 2,
        maxLength: 100,
    },
    cost: {
        type: Number,
        required: [true, 'Subscription Cost is required'],
        min: [0, 'cost must be greater than zero'],
    },
    currency: {
        type: String,
        required: [true, 'Currency is required'],
        trim: true,
        enum: ['USD', 'INR', 'EUR', 'GBP', 'INR', 'JPY', 'CNY'], // Add more currencies as needed
        default: 'INR',
    },
    frequency: {
        type: String,
        enum: ['Monthly', 'Yearly', 'Weekly', 'Daily'],
        default: 'Monthly',
    },
    category: {
        type: String,
        enum: ['Entertainment','Sports', 'Productivity', 'Education', 'Health', 'Other'],
        required: [true, 'Category is required'],
    },
    paymentMethod: {
        type: String,
        required: true,
        trim: true,
    },
    status:{
        type: String,
        enum: ['Active', 'Inactive', 'Cancelled', 'Paused'],
        default: 'Active',
    },
    startDate: {
        type: Date,
        required: true,
        validate: {
        validator: (value) => value <= new Date(),
        message: 'Start date cannot be in the future, it must be in the past or today.'
        }
    },
      renewalDate: {
        type: Date,
        required: true,
        validate:{    
        validator: function(value){
            return value > this.startDate;
        },
            message: 'Renewal date must be after the start date.'
    }
},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true,
    }
}, { timestamps: true});


// Auto-calculate renewalDate before saving
subscriptionSchema.pre('save', function(next){
    if(!this.renewalDate){
        const renewalPeriods ={
            daily: 1,
            weekly: 7,
            monthly: 30,
            yearly: 365,
        };
        
        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency]);
    }

    // Auto-update status based on current date and renewalDate
    if(this.renewalDate <= new Date()){
        this.status = 'expired';
    }
    next();
});

// const Subscription = mongoose.model('Subscription', subscriptionSchema);

export default mongoose.models.Subscription || mongoose.model('Subscription', subscriptionSchema);