import { NavLink } from 'react-router-dom';
export default function () {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark " >
            <NavLink className="navbar-brand" to="/">Books</NavLink>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to='/' >Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink className="nav-link" to='/admin'>Login <span className="sr-only">(current)</span></NavLink>
                    </li>

                </ul>

            </div>
        </nav>
    );
}