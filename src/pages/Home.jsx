import Veggie from "../components/Veggie";
import Popular from "../components/popular";
import { motion } from "framer-motion";


import React from 'react';

const Home = () => {
    return (
        <motion.div
            animate={{opacity:1}}
            initial = {{opacity:0}}
            exit = {{opacity:0}}
            transition = {{duration: 0.6 }}
        >
            <Veggie/>
            <Popular/>
        </motion.div>
    );
}

export default Home;
