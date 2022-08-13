
import { Link, Outlet, Route, Routes, useNavigate, useParams } from 'react-router-dom';

const AboutComponent = () => {

const { id } = useParams();
      
return (
    <div>
    <h2>About with Id: {id} </h2>
    <div>
        soref,lds
    </div>
    </div>
    )
}