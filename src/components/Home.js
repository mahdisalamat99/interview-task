import React,{useState} from 'react';
import '../styles/home.scss';
import BigBlock from './BigBlock';
import ImageBlock from './ImageBlock';
import TextBlock from './TextBlock';
import { useNavigate, useParams } from 'react-router-dom';

export default function Home({imageBlocks,bigBlocks,textBlocks,filter}) {

    const {nav} = useParams();
    // console.log(nav)

    return (
        <div className="home-comp">
            <div>
                {
                    // nav !== "all" ? (
                    //     imageBlocks?.filter((item) => item.category.toLowerCase() === nav).map((block) => {
                    //         return (
                    //             <ImageBlock imageBlocks={block}/>
                    //         )
                    //     })
                    // ) : (
                        //     imageBlocks.map((block) => {
                            //         return (
                                //             <ImageBlock imageBlocks={block}/>
                                //         )
                                //     })
                                // ) 
                                filter !== "all" ? (
                                    imageBlocks?.filter((item)=> item.category.toLowerCase() === filter.toLowerCase()).map((block) => {
                                        return (
                                                    <ImageBlock imageBlocks={block}/>
    
                                                )
                        })

                                ) : (
                                    imageBlocks.map((block) => {
                                                return (
                                                        <ImageBlock imageBlocks={block}/>
                                                    )
                                                })
                                )
                }
            </div>

            <div>
                {
                    nav !== "all" ? (
                        bigBlocks.filter((item) => item.category.toLowerCase() === nav).map((block) => {
                            return (
                                <BigBlock bigBlocks={block}/>
                            )
                        })
                    ) : (
                        bigBlocks.map(block => {
                            return (
                                <BigBlock bigBlocks={block} />
                            )
                        } )
                    )
                }
            </div>

            <div>
                {
                    nav !== "all" ? (
                        textBlocks.filter((item) => item.category.toLowerCase() === nav).map((block) => {
                            return (
                                <TextBlock textBlocks={block} />
                            )
                        })
                    ) : (
                        textBlocks.map((block) => {
                        return (
                            <TextBlock textBlocks={block}/>
                        )
                    })
                    )
                }
            </div>
        </div>
    )
}
