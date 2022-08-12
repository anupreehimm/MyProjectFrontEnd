import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";

export const List=()=>{

    const [record,setRecord]=useState([])


    const columns=[
        {field:'tvId', className:'Television Id', width: 200  },
        { field: 'model', headerName: 'Television Model', width: 200 },
        { field: 'brand', headerName: 'Television Brand', width: 200 },
        { field: 'cost', headerName: 'Television Prize', width: 200 },
        { field: 'size', headerName: 'Television Size', width: 200 },
        { field: 'type', headerName: 'Television Type', width: 200 },
    ];


    return(
        <>
            <div className="container mt-3 pd-4">
                <div className="row justify-content-cnter">
                    <div className="text-center table-responsive-lg">
                        <div style={{height:400, width:100}} className="col-lg-8, col-md-10, col-sm-12">
                        <DataGrid
                            columns={columns}
                            rows={record}
                            pageSize={7}
                            rowsPerPageOptions={[7]}
                            />
                        </div>

                    </div>
                </div>
            </div>
        
        </>
    )
}