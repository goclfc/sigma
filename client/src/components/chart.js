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
    const [show,setShow]=useState(true)
    console.log(props)
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false,
                text: 'Chart.js Bar Chart',
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
    console.log(props.data,111111111111)
    data.datasets.push(
        {
            label: descr,
            data: [props.data[0+i*4]['Percentage'], props.data[1+i*4]['Percentage'], props.data[2+i*4]['Percentage'],props.data[3+i*4]['Percentage']],
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
    return (<Bar options={options} data={data} />)
}


export default ChartBar