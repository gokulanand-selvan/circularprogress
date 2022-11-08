import { Box, Typography } from "@mui/material";
import React from "react";
import { GetPercentage } from "./utils";
import { CircularProgress } from '@mui/material';


export const Score = () => {

    const building = {
        rooms: [
            {
                id: "room1",
                tasks: [
                    {
                        score: 5, // 100
                        value: 3 // 20,
                    },
                    {
                        score: 3, //100
                        value: 1 // 66.66 
                    }
                    ,
                    {
                        score: 10, //100
                        value: 9 // 70
                    },
                    {
                        score: 15, // 100
                        value: 10 // 86.666
                    }
                ]
            },
            {
                id: "room2",
                tasks: [
                    {
                        score: 5, //100
                        value: 3 // 60
                    },
                    {
                        score: 3, // 100
                        value: 2 //66.66
                    }
                    ,
                    {
                        score: 10, //100
                        value: 7 //70
                    },
                    {
                        score: 5, //100
                        value: 3 //60

                        //total 499.98

                        //  499.98/800 = 0.624975 * 100 = 62.4975.
                    }
                ]
            }
        ]
    }

    let sum = 0;
    let totallength = 0;

    const result = building.rooms.map((build) => {
        totallength = totallength + build.tasks.length;
        build.tasks.map((t) => sum = sum + ((t.value / t.score) * 100))
    });

    console.log(result);
    console.log(sum);
    let percent = Math.round(GetPercentage(building.rooms).totalper);

    return (
        <>

            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress sx={{ width: '100px', height: "200px" }} size="100px" thickness={5} variant="determinate" value={percent} />
                <Box
                    sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: "20px"
                    }}
                >
                    <Typography sx={{ fontSize: "25px", fontWeight: "bold" }} variant="caption" component="div" color="text.secondary">
                        {`${(percent)}%`}
                    </Typography>
                </Box>
            </Box>
        </>
    )
    //Math.round()

}