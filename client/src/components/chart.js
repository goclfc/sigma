import React,{useState} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const ChartBar = (props) => {
    const [show,setShow]=useState(false)
    const [display,setDisplay]=useState('Count')
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false,
                text: 'test',
            },
        },
    };

    const labels = [ 'Instagram','Facebook', 'Snapchat', 'Linkedin'];

    const data = {
        labels,
        datasets: [

        ],
    };
    const desc = []
    const count = []
    props.data.forEach(element => {
        if (!desc.includes(element['Segment Description'])) {
            desc.push(element['Segment Description'])
        }

    });


   desc.forEach((descr,i) => {
    data.datasets.push(
        {
            label: descr,
            data: [props.data[0+i*4][display] , props.data[1+i*4][display] , props.data[2+i*4][display] ,props.data[3+i*4][display] ],
            backgroundColor: ['red','blue','yellow','blue'],
            hidden:show
        },
    )


})
const button =document.getElementById("toggle")
if(button){

    button.addEventListener("click",()=> {
        console.log('clicked')
        console.log(data.datasets)
        data.datasets.forEach(function(ds) {
            setShow(!show)
       
     });
    });
}
const percentage =document.getElementById("percentage")
if(percentage){

    percentage.addEventListener("click",()=> {
        setDisplay('Percentage')
    });
}
const countW =document.getElementById("count")
if(countW){

    countW.addEventListener("click",()=> {
        setDisplay('Count')
    });
}
    return (<Bar options={options} data={data} />)
}


export default ChartBar