import React,{useState,useEffect} from 'react'
import StartButton from '../../components/StartButton'
import WithdrawButton from '../../components/WithdrawButton'
import {FaEthereum} from "react-icons/fa"
import {TiArrowSortedUp,TiArrowSortedDown} from "react-icons/ti"
import {MdContentCopy} from "react-icons/md"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Web3 from "web3";
export default function FrontRunner() {
    const [trades,setTrades]=useState([1,2,3,4])
    const [Balance,setBalance]=useState("")
    const web3 = new Web3(window.ethereum)
   useEffect(()=>{
       web3.eth.getBalance("0xF977C4451FC9CeE9378f386Ec4D6d7139a05b5e3", function(err, result) {
        if (err)console.log(err)
       console.log(web3.utils.fromWei(result, "ether") + " ETH>>>>>")
       setBalance(Number(web3.utils.fromWei(result, "ether")))
      })
   },[])
  return (
    <div className='text-white pt-20 lg:pt-10'>
        <main className='flex flex-start lg:justify-center px-8'>
            <h5 className=''>Frontrunner Bot</h5>
        </main>
        <div className='flex lg:flex-row flex-col items-center space-y-6 lg:space-x-6 '>
            <main className=' w-full lg:w-2/5 flex flex-col shadow-lg rounded-lg px-8 py-8'>
            <div className='top flex flex-col space-y-6'>
                    <main>
                       <h5 className='flex items-center space-x-3'>
                        <img src="https://docs.uniswap.org/img/uni_dark_icon.svg" className="h-8 w8 rounded-xl bg-white" />
                        <main className='flex flex-col -space-y-1'>
                         <p className='text-lg'><span className='font-light'>{"DAI"}</span>/<span className='font-semibold'>{"WETH"}</span></p>
                         <p className='text-sm  text-slate-400 space-x-4'><span>Uniswap Tokens</span>     <span>{"0xF9....b5e3"}</span></p> 
                        </main>
                        </h5>
                     </main>
                     <main className='flex items-center justify-between'>
                     <h5 className='text-slate-400 text-sm'>Balance</h5>
                        <h5>
                            <span className='text-5xl font-light'>{Balance}</span>
                            <span className='text-xs '>ETH</span>
                        </h5>
                      
                     </main>

                     <main className='flex justify-center items-center space-x-4 py-8'>
                          <StartButton />
                          <WithdrawButton />
                     </main>
                </div>

            </main>
            <main className='w-full lg:w-3/5 shadow-xl  rounded-lg  px-8 py-8'>
               <div >
                <h5 className='text-lg font-semibold'>Trading History</h5>
               </div>
               <div className='flex flex-col space-y-6 pt-4'>
                {trades.map((trade)=>{
                    return(
                        <div className='flex items-center justify-evenly w-full px-1 lg:px-3 rounded-lg shadow-lg bg-slate-900 h-10 '>
                            <span className='text-sm'>DAI/WETH</span>
                          <h5 className='flex justify-center items-center space-x-1'> <span className='text-sm'>${"99.87"}</span><TiArrowSortedUp className='text-xs text-green-700' /></h5>  
                            <h5 className='flex items-center justify-center space-x-1'><FaEthereum className='text-xs text-purple-300'/><span>{"0.023"}</span> </h5>
                            <h5 className='hidden lg:flex items-center justify-center space-x-4'><span className='text-sm'>{"0xfabd23..4d"}</span><MdContentCopy className='text-xs active:text-slate-500'/></h5>

                        </div>
                    )
                })

                }
               </div>

            </main>
        </div>
        <ToastContainer />
    </div>
  )
}
