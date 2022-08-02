import { Typography, Stack, TextField, Button, Grid } from "@mui/material";
import { useState, useEffect, value} from "react";
import ImageList from '@mui/material/ImageList';
import two from './images/two.jpg'



const Assignment = () => {
    const [input, setInput]= useState('');
    const [array, setArray]=useState([]);
    const [arrays, setArrays] = useState([]);
    // const [gradestotal, setGradesTotal] = useState([]);
    const [x, setX ] =useState([]);
    const [allroundup, setAllroundup] = useState();
    // let x = 
    useEffect(() => {
        localStorage.setItem('key', JSON.stringify(x));
      }, [x]);

    useEffect(() => {
        localStorage.getItem('key');
    }, []);

    
    const handleChange =  (value) =>{
        
        if(input!=''){
            // evaluation
            let show = input * value;
            setArray(show);
            // console.log(input)
            let grades = array;
            grades.push(show)
            setArray([...grades]);
            setInput('');
            console.log(array)
            // console.log(value)
            // console.log(grades);

            // array of input
            let enter = arrays;
            enter.push(parseInt(input));
            // console.log(input  + 1)
            // console.log(input + 1)
            setArrays(enter);
            setArrays([...enter]);



    


            // console.log(curvalue)
        }
        else
        alert('credit unit required')
        
    }




const [total, setTotal] = useState();
const initialValue = 0;
useEffect(()=>{
    const sumWithInitial = array.reduce(
        (prev, cur) => prev + cur,
        initialValue
        );
        setTotal(sumWithInitial)
    })

    const [alltotal, setAllTotal] = useState();
    const initialTotal =0;
    useEffect(()=>{
        const sumWithInitialtotal = arrays.reduce(
            (one, two) => one + two,
            initialTotal
            );
            setAllTotal(sumWithInitialtotal)
            console.log(arrays)
        })


        const [division, setDivision] = useState();
        const handleDivide = () => {
            let divide = total/alltotal
            setDivision(divide)
            let roundup = Math.round(divide * 100)/100;
            setX(roundup)
            
        }
        // console.log(x)
    //     const [final, setFinal] = useState('')
    //     const handelSum = () => {
    //         let lastSemesterIndex = x.length - 1
    //         let firstSemesterIndex = x.length - 2
    //         let sumofboth = x[lastSemesterIndex] + x[firstSemesterIndex] / 2;
    //         setFinal(sumofboth)
    //         let troundup= Math.round(sumofboth * 100)/100;
    //         setAllroundup(troundup)
    //         // alert(allroundup)
    //         // alert(final)
    //    }


    return (
        <>
        <Stack sx={{ 
            backgroundImage:{md:  `url(${two})`},
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        alignItems: "center", 
        height: "100vh",
    } }>
            {/* <img src={two}  /> */}
        <Stack sx={{
        backgroundColor: "white",
         height: "cover",
         width: "500px",
        marginTop: "50px",
        padding: '20px ',
        borderRadius: "10px"

          }} spacing={3} px={5}>
        <Typography marginTop={3} color="green">
            Calculate Your GPA And CGPA
        </Typography>
        <TextField id="input" type='number' label="Enter your credit unit" onChange={(e) => setInput(e.target.value)} ></TextField>
            <Typography color="green">multiply credit unit with  grades</Typography>
            <Typography color="green">Select Your Grades</Typography>
        <Grid md={12}>
        <Grid item md={6}>
        <Button id="grades" sx={{backgroundColor: "white", margin: "10px", color: "green"}} onClick={() => handleChange(4.00)}>A = 4.00</Button>
        <Button sx={{backgroundColor: "white", color: "green"}} onClick={() => handleChange(3.50)}>AB = 3.50</Button>
        <Button sx={{backgroundColor: "white", margin: "10px", color: "green"}} onClick={() => handleChange(3.00)}>B = 3.00</Button>
        <Button sx={{backgroundColor: "white", color: "green"}} onClick={() => handleChange(2.50)}>BC = 2.50</Button>
        <Button sx={{backgroundColor: "white", margin: "10px", color: "green"}} onClick={() => handleChange(2.00)}>C = 2.00</Button>
        </Grid>
        <Grid item md={6}>
        <Button sx={{backgroundColor: "white", margin: "10px", color: "green"}} value={value} onClick={() => handleChange(2.50)}>CD = 2.50</Button>
        <Button sx={{backgroundColor: "white", color: "green"}} onClick={() => handleChange(2.25)}>D = 2.25</Button>
        <Button sx={{backgroundColor: "white", margin: "10px", color: "green"}} onClick={() => handleChange(2.00)}>E = 2.00</Button>
        <Button sx={{backgroundColor: "white",color: "green"}} onClick={() => handleChange(0.00)}>F = 0.00</Button>
        </Grid>
        </Grid>
        <table border="1px">
        <tr>
        <th>Total of Both <br></br> Credit Unit and Grades</th>
        <th>Total of credit unit</th>
        </tr>
        <tr>
            <td>{array.map((arrays) => (
                <div>{arrays}</div>
                ))} Total {total} </td>
                 {/* <div>Total =</div> */}
                 
                <td>{arrays.map((grade) => (
                    <div>{grade}</div>
                ))} Total {alltotal}</td>
                {/* <div>{gradestotal}</div> */}
        </tr>
        <tr>
               <td> <Button onClick={handleDivide} sx={{color:"black"}} >press to evaluate</Button></td>
               <td> <Button sx={{color:"black"}}>Your GPA = {x}</Button></td>
        </tr>
                {/* <Button>secondsemester</Button> */}

        </table>
        </Stack>
        </Stack>
        </>
    );
}
 
export default Assignment;