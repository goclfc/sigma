import logo from './logo.svg';
import './App.css';
import ChartBar from './components/chart';
import React ,{useState,useEffect} from 'react';

function App() {
  const [data,setData]=useState([])
  const [segmentTypes,setSegmentTypes]=useState([])
  const [segmentNames,setSegmentNames]=useState([])
  const [segmentDesc,setSegmentDesc]=useState([])
  const [selectedSegment,setSelectedSegment]=useState('')
  const [segmentData,setSegmentData]=useState([])
  useEffect(()=>{
    fetch('https://sigma.herokuapp.com/')
    .then((response) => response.json())
    .then((data) => setData(data));
  },[])
  useEffect(()=>{
    let desc=[]
    let newList=[]
    let names = []
    data.forEach(list=>{
      if(!desc.includes(list['Segment Description'])){
        desc.push(list['Segment Description'])
        newList.push(list)
      }
      if(!names.includes(list['Segment Type'])){
        names.push(list['Segment Type'])
      }
      setSegmentNames(names)
    })
    setSegmentTypes(newList)
    setSegmentDesc(desc)
  },[data])
  const getSegmentDescr=(segmentName)=>{
    const response = []
    data.forEach(listItem=>{
      if(listItem['Segment Type']==segmentName){
        response.push(listItem)
      }
    })
    return response
  }
  const handleClick=(item)=>{
    setSelectedSegment(item)
  }
  useEffect(()=>{
    const selectedSegmentData=getSegmentDescr(selectedSegment)
    setSegmentData(selectedSegmentData)
  },[selectedSegment])
  console.log(segmentData)
  return (
    <div className="App">
        <div className='header'>
        <button id="toggle">show/hide all</button>
            <ul>
          {segmentNames.length && segmentNames.map(listItem =>(
            <li key={listItem} onClick={(e)=>handleClick(listItem)}>
            {listItem}
            </li>
          ))}
              
            </ul>
        </div>
    <ChartBar data={segmentData}/>
    </div>
  );
}

export default App;
