const express = require("express");
const studentSchema = require("../model/studentSchema");
const mongoose = require("mongoose");


const studentRoute = express.Router();


studentRoute.post("/create-student",(req,res)=>{
    studentSchema.create(req.body,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})


studentRoute.get("/",(req,res)=>{
    studentSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
studentRoute.route("/update-student/:id")
.get((req,res)=>{
    studentSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
.put((req,res)=>{
    studentSchema.findByIdAndUpdate(
        mongoose.Types.ObjectId(req.params.id),
        {$set: req.body},
        (err,data)=>{
            if(err)
                return err;
            else
                res.json(data);
        })
})




studentRoute.delete("/delete-student/:id",(req,res)=>{
    studentSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})


module.exports = studentRoute;


//http://localhost:4000/students -> GET
//http://localhost:4000/students/create-student + if request type is post ->


//Axios.post(url,obj)
//Axios.post(http://localhost:4000/students/create-student, obj)


//req or res //req -> Request line, Request header, Request body


//Axios.delete(http://localhost:4000/students/delete-student/507f1f77bcf86cd799439011)
/*


_id: 507f1f77bcf86cd799439011
name: Rekha
email:rekha@gmail.com
rollNo: 12


*/
