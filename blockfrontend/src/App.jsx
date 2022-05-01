import React from 'react'
import Block from './Components/BlockGraph';
import './App.css';
import BannerRow from './Components/BannerRow';
import useAxios from './Services/useAxios';

const App = () => {
  console.count("App")
  // const [fetchingBlock, setFetchingBlock] = useState(false);
  // const [blockData, setBlockData] = useState();
  // const [testBlockName, setTestBlockName] = useState(0)

  // setTimeout(() => {
  //   setTestBlockName(testBlockName + 1)
  // }, 2000);

  const {data, loading} = useAxios("https://localhost:44367/api/BlockChain")
  // console.log("App Data", data)

  return (
    <div className="App">
      {loading ? <p>Loading...</p> : 
        <div>
          <BannerRow data={data} fetchStatus={loading}/>
          <Block data = {data}/>
        </div>
      }
    </div>
  );
}

export default App;
