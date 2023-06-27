import './Navbar.css'
const Navbar = () => {
    return (
        <nav className="nav">
            <h2>Employee</h2>
            <ul className='menu'>
                <li>Home</li>
                <li>Add Employee</li>
                <li>Employee List</li>
                <li>Logout</li>
            </ul>
        </nav>
    );
};
export default Navbar;