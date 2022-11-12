const hello = async(req,res) => {
    const csvFilePath='./server/db.csv'
const csv=require('csvtojson')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj,'this');
    /**
     * [
     * 	{a:"1", b:"2", c:"3"},
     * 	{a:"4", b:"5". c:"6"}
     * ]
     */ 
})
 
// Async / await usage
try{
        const jsonArray=await csv().fromFile(csvFilePath);
        res.json(jsonArray) ;
    } catch(error){

    }
}

module.exports = {
    hello
}