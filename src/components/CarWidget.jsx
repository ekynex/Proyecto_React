import { Flex, Text } from "@chakra-ui/react";
import { IoCartOutline } from "react-icons/io5";

const CarWidget = () => {
    return(
        <Flex alignItems={"center"} height={"100%"} width={"50px"} justifyContent={"space-between"}>
            <IoCartOutline size={30} color="blue" />
            <Text fontSize={"1.2rem"}>3</Text> {/* HARDCODEADO  */}
        </Flex>
    )
}

export default CarWidget;