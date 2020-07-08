import React from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useMutation, useQuery } from "@apollo/react-hooks";
import useInput from "../../Hooks/useInput";
import LandingPresenter from "./LandingPresenter";
import { CREATE_PERSON} from "./LandingQuries";

export default () => {

    const code = useInput("");
    const name = useInput("");



    return (
        <LandingPresenter code={code} name={name} />
    )
};