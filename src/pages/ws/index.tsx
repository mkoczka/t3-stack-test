import { GetServerSideProps, NextPage } from "next";
import React from "react";

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        redirect: {
            permanent: false,
            destination: "/ws/supernova/ds/17563-artem's-design-system/latest/content/17442-default/tokens/colors",
        },
        props: {}
    }
}

const WorkspacePage: NextPage = () => {
    return (
        <div>Loading...</div>
    )
}

export default WorkspacePage;