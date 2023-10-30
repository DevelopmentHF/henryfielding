import HeaderText from "../../components/HeaderText";
export default function page() {
    return (
       <div className="flex flex-col w-screen items-start justify-center m-2 gap-4">
           <h1>{"me = {"}</h1>

               <h2 className="mx-4">{"'name': {"}</h2>
                   <h2 className="mx-8">{"'firstName': 'henry',"}</h2>
                   <h2 className="mx-8">{"'lastName': 'fielding',"}</h2>
               <h1 className="mx-4">{"},"}</h1>

               <h2 className="mx-4">{"'about': 'aspiring software developer and second-year student @ unimelb',"}</h2>

                <h2 className="mx-4">{"'langauges': ["}</h2>
                <h2 className="mx-8">{"java,"}</h2>
                <h2 className="mx-8">{"python,"}</h2>
                <h2 className="mx-8">{"c,"}</h2>
                <h2 className="mx-8">{"javascript,"}</h2>
                <h1 className="mx-4">{"],"}</h1>

               <h2 className="mx-4">{"'tech': ["}</h2>
               <h2 className="mx-8">{"mysqlworkbench,"}</h2>
               <h2 className="mx-8">{"pandas,"}</h2>
               <h2 className="mx-8">{"react,"}</h2>
               <h2 className="mx-8">{"tailwindcss,"}</h2>
               <h1 className="mx-4">{"],"}</h1>

               <h2 className="mx-4">{"'links': {"}</h2>
               <h2 className="mx-8">{"'github': "} <a href='https://github.com/developmenthf'>'https://github.com/developmenthf'</a>{","}</h2>
           <h2 className="mx-8">{"'linkedin': "} <a href='https://www.linkedin.com/in/henryfielding-aus/'>'https://www.linkedin.com/in/henryfielding-aus/'</a>{","}</h2>
               <h1 className="mx-4">{"},"}</h1>

           <h1>{"};"}</h1>
       </div>
    )
}
