import jwt from "jsonwebtoken";

export default function verifyToken(req, res, next){
  
    try {
    const token = req.header("Authorization");
    if(!token){
        return res.status(401).json({ message: "Access Denied" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};