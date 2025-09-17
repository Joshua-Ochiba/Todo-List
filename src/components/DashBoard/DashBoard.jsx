import React, { act, useState } from 'react'
import './DashBoard.css'
import { assets } from '../../assets/assets'
import { Twirl as Hamburger } from 'hamburger-react'
import { FaRegCheckCircle, FaTasks } from "react-icons/fa";
import { MdHome, MdHouse, MdOutlineKeyboardArrowDown, MdOutlineTask, MdTask } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiProgress3Line } from "react-icons/ri";
import { RiLogoutBoxLine } from "react-icons/ri";
import 'boxicons';
import MenuIcon from '../Boxicons/MenuIcon';
import GridIcon from '../Boxicons/GridIcon';
import SearchIcon from '../Boxicons/SearchIcon';
import ChecklistIcon from '../Boxicons/ChecklistIcon';
import CheckCircleIcon from '../Boxicons/CheckCircleIcon';
import LoaderDotsIcon from '../Boxicons/LoaderDotsIcon';
import ClipboardCheckIcon from '../Boxicons/ClipboardCheckIcon';
import TaskList from '../CustomForm/CustomForm';
import CustomForm from '../CustomForm/CustomForm';

import { useNavigate } from 'react-router-dom';


const DashBoard = () => {
    const [isActive, setIsActive]= useState(false);
    const [activeSection, setActiveSection] = useState("dashboard");


    const [todos, setTodos] = useState([]);
    const [progress, setProgress] = useState([]);
    const [completed, setCompleted] = useState([]);


    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    const toggleSideBar = () => {
        setIsActive((prev) => !prev);
    };

      const handleLogout = () => {
    navigate("/");
  };
    

  return (
    <div className='body'>
        
                <div  className={`sidebar ${isActive ? "active" : ""}`}>
                    <div className='logo_content'>
                        <div className='dash_logo'>
                            <img src={assets.logo} alt='easyclass'/>
                            <div className='logo_name'>ToDoList</div>
                        </div>
                    
                    <MenuIcon id='btn'  onClick={toggleSideBar}/>
                    </div>

                <ul className='nav_list'> 
                    <li>
                            <SearchIcon id='bx-search' onClick={toggleSideBar}/>
                            <input type='text' placeholder='Search...'/>
                        <span className='tooltip'>Search</span>
                    </li>

                    <li onClick={() => setActiveSection("dashboard")}>
                        <a>
                            <GridIcon id='icn'/>
                            <span className='links_name'>Dashboard</span>
                        </a>
                        <span className='tooltip'>Dashboard</span>
                    </li>

                    <li onClick={() => setActiveSection("tasks")}>
                        <a>
                            <ChecklistIcon id='icn'/>
                            <span className='links_name'>Tasks</span>
                        </a>
                        <span className='tooltip'>Tasks</span>
                    </li>

                    <li onClick={() => setActiveSection("completed")}>
                        <a>
                            <CheckCircleIcon id='icn'/>
                            <span className='links_name'>Completed</span>
                        </a>
                        <span className='tooltip'>Completed</span>
                    </li>

                    <li onClick={() => setActiveSection("progress")}>
                        <a>
                            <LoaderDotsIcon id='icn'/>
                            <span className='links_name'>In Progress</span>
                        </a>
                        <span className='tooltip'>In Progress</span>
                    </li>

                    <li onClick={() => setActiveSection("todos")}>
                        <a >
                            <ClipboardCheckIcon id='icn'/>
                            <span className='links_name'>To Dos</span>
                        </a>
                        <span className='tooltip'>To Do</span>
                    </li>
                </ul>

                <div
                className='profile_content'>
                    <div className='profile'>
                        <div className='profile_details'>
                            <img src={assets.profile}/>
                            <div className='name_job'>
                                <div className='name'>Lorem Ipsum</div>
                                <div className='job'>Web Dev</div>
                            </div>
                        </div>
                        <RiLogoutBoxLine id='log_out' onClick={handleLogout} style={{ cursor: "pointer" }}/>
                    </div>
                </div>

                <div className='dashboard-content'>

                </div>

        </div>

        <div className='home_content'>
            <div className='dashboard-top'>
                <h4>Track Your Tasks</h4>
                
                <div className='dashboard-items'>
  <ul>
    <li 
      className={`hover-underline-animation ${activeSection === "dashboard" ? "active" : ""}`} 
      onClick={() => setActiveSection("dashboard")}
    >
      Board
    </li>
    <li 
      className={`hover-underline-animation ${activeSection === "tasks" ? "active" : ""}`} 
      onClick={() => setActiveSection("tasks")}
    >
      All
    </li>
    <li 
      className={`hover-underline-animation ${activeSection === "completed" ? "active" : ""}`} 
      onClick={() => setActiveSection("completed")}
    >
      Completed
    </li>
    <li 
      className={`hover-underline-animation ${activeSection === "progress" ? "active" : ""}`} 
      onClick={() => setActiveSection("progress")}
    >
      In-Progress
    </li>
    <li 
      className={`hover-underline-animation ${activeSection === "todos" ? "active" : ""}`} 
      onClick={() => setActiveSection("todos")}
    >
      Todo
    </li>
  </ul>
</div>

            </div>
            

            <div className='text'>
                 {activeSection === "dashboard" }
                 {activeSection === "tasks"  }
                 {activeSection === "completed" }
                 {activeSection === "progress" }
                 {activeSection === "todos" }
            </div>

            <div className='tab_container'>
                {activeSection === "dashboard" && (
                    <div className='tab-dashboard'>
                        <div className='tab-dashboard-item'>
                            <h4>TOTAL TASKS</h4>
                            <div className='tab-dashboard-data'>
                                <p>{todos.length + progress.length + completed.length}</p>
                                <div className='icon-circle1'>
                                    <GridIcon id='icn'/>
                                </div>
                            </div>
                        </div>

                        <div className='tab-dashboard-item'>
                            <h4>COMPLETED TASKS</h4>
                            <div className='tab-dashboard-data'>
                                <p>{completed.length}</p>
                                <div className='icon-circle2'>
                                    <CheckCircleIcon id='icn'/>
                                </div>
                                
                            </div>
                        </div>

                        <div className='tab-dashboard-item'>
                            <h4>TASKS IN PROGRESS</h4>
                            <div className='tab-dashboard-data'>
                                <p>{progress.length}</p>
                                <div className='icon-circle3'>
                                    <LoaderDotsIcon id='icn'/>
                                </div>

                            </div>
                        </div>

                        <div className='tab-dashboard-item'>
                            <h4>TODOS</h4>
                            <div className='tab-dashboard-data'>
                                <p>{todos.length}</p>
                                <div className='icon-circle4'>
                                    <ClipboardCheckIcon id='icn'/>
                                </div>
  
                            </div>
                        </div>

                    </div>
                )}

                {activeSection === "todos" && (
                    <div className='tab-to-do'>
                    <div className='to-do'>
                        <div className='header'>
                            <div className='circle'></div>
                            <h4>To Do</h4>
                        </div>
                        <div className='list'><CustomForm tasks={todos} setTasks={setTodos} title="To Do" /></div>
                        
                    </div>
                </div>
                )}

                {activeSection === "progress" && (
                    <div className='tab-in-progress'>
                    <div className='to-do'>
                        <div className='header'>
                            <div className='circle-p'></div>
                            <h4>In Progress</h4>
                        </div>
                        <div className='list'><CustomForm tasks={progress} setTasks={setProgress} title="In Progress" /></div>
                    </div>
                </div>
                )}
                
                {activeSection === "completed" && (
                    <div className='tab-completed'>
                    <div className='to-do'>
                        <div className='header'>
                            <div className='circle-c'></div>
                            <h4>Completed</h4>
                        </div>
                        <div className='list'><CustomForm tasks={completed} setTasks={setCompleted} title="Completed" /></div>
                    </div>
                </div>
                )}

                 {activeSection === "tasks" && (
            <>
              {/* Show all three at once if tasks is clicked */}
              <div className='tab'>
                <div className='to-do'>
                  <div className='header'>
                    <div className='circle'></div>
                    <h4>To Do</h4>
                  </div>
                  <div className='list'><CustomForm tasks={todos} setTasks={setTodos} title="To Do" /></div>
                </div>
              </div>
              <div className='tab2'>
                <div className='to-do'>
                  <div className='header'>
                    <div className='circle-p'></div>
                    <h4>In Progress</h4>
                  </div>
                  <div className='list'><CustomForm tasks={progress} setTasks={setProgress} title="To Do" /></div>
                </div>
              </div>
              <div className='tab3'>
                <div className='to-do'>
                  <div className='header'>
                    <div className='circle-c'></div>
                    <h4>Completed</h4>
                  </div>
                  <div className='list'><CustomForm tasks={completed} setTasks={setCompleted} title="To Do" /></div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
                


export default DashBoard