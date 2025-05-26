const user=require("./Model/userModel.js");


const getvenue=async(req,res)=>{
     const { venue } = req.body;
  console.log("Received venue:", venue);
  res.json({ message: `Venue ${venue} received!` });
}

const getdate=async(req,res)=>{
  const { date } = req.body;
  console.log("Received date:", date);
  res.json({ message: `Date ${date} received!` });
}



const gettime=async(req,res)=>{
  const { venue,date,slot } = req.body;
  console.log("Received time:", slot);
  const bookedSlot=await user.findOne({venue,date,time: slot});
  if(bookedSlot){
    res.status(500).json({ error: "Slot already booked" });
  }else{
    res.status(201).json({ message: `Time ${slot} received!` });
  }
}

const booking=async(req,res)=>{
    try {
    const {name,email,contact,venue, date, time } = req.body;
    const newUser = await user.create({ name,email,contact,venue,date,time });
    console.log("successful entry");
    res.status(201).json({ message: "Booking created", booking: newUser });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ error: "Failed to create booking" });
  }
}

module.exports={getvenue,getdate,gettime,booking}