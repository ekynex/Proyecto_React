import { Flex, Text } from "@chakra-ui/react";
import { IoCartOutline } from "react-icons/io5";
import { CartContext } from "../../context";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const CarWidget = () => {

    const { cartState } = useContext(CartContext); 
    const qtyTotalItems = cartState.reduce((acc, item) => acc + item.qtyItem, 0);

    return(
        <Flex alignItems={"center"} height={"100%"} width={"50px"} justifyContent={"space-between"}>
            <IoCartOutline size={30} color="blue" />
            <Link to="/checkout"><Text fontSize={"1.2rem"}>{qtyTotalItems}</Text></Link>
        </Flex>
    );
};
