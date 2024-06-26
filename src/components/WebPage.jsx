import React, {useState} from 'react';
import { useMediaQuery } from 'react-responsive';
import './webpage.css';
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'
import image6 from '../assets/image6.jpg'
import image7 from '../assets/image7.jpg'
import image8 from '../assets/image8.jpg'
import image9 from '../assets/image9.jpg'
import image10 from '../assets/image10.jpg'
import image11 from '../assets/image11.jpg'
import image12 from '../assets/image12.jpg'
import image13 from '../assets/image13.jpg'
import image14 from '../assets/image14.jpg'
import image15 from '../assets/image15.jpg'
import image16 from '../assets/image16.jpg'
import image17 from '../assets/image17.jpg'
import image18 from '../assets/image18.jpg'
import image19 from '../assets/image19.jpg'
import image20 from '../assets/image20.jpg'
import image21 from '../assets/image21.jpg'
import image22 from '../assets/image22.jpg'
import image23 from '../assets/image23.jpg'
import image24 from '../assets/image24.jpg'
import image25 from '../assets/image25.jpg'
import image26 from '../assets/image26.jpg'
import image27 from '../assets/image27.jpg'
import image28 from '../assets/image28.jpg'
import image29 from '../assets/image29.jpg'
import image30 from '../assets/image30.jpg'
import image31 from '../assets/image31.jpg'
import image32 from '../assets/image32.jpg'


const WebPage = () => {
    const [recommended_groups, setRecommended_groups] = useState([[image6, 'Leisure', false], [image7, 'Activism', false], [image8, 'MBA', false], [image9, 'Philosophy', false]])
    const [location_edit_enabled, setLocation_edit_enabled] = useState(false)
    const [location, setLocation] = useState('Enter location')
    const [user_signed_in, setUser_signed_in] = useState(false)
  
    const Updating_follow_grp = (clicked_group) => {
       recommended_groups.map((group, index) => {(group[1] === clicked_group) && (recommended_groups[index][2] = !group[2])})
        setRecommended_groups([...recommended_groups])
    }
    const breaking_point_desktop = useMediaQuery({query: '(min-width: 790px)'})
    const breaking_point_mobile = useMediaQuery({query: '(min-width: 400px)'})
    return (
        <div>
            {breaking_point_desktop && <div className='topbar'>
                <h5 magin className='logo'><span style={{color:'#27A365'}}>ATG.</span>W<span><img style={{marginBottom: '5px'}} alt='O' src={image1}/></span>RLD</h5>
                <div style={{width: '360px', paddingTop: '15px', paddingBottom: '15px'}} class="input-group flex-nowrap">
                    <span style={{borderBottomLeftRadius: '21px', borderTopLeftRadius: '21px', backgroundColor: '#F2F2F2', border: 'none'}} class="input-group-text" id="addon-wrapping"><img alt='search' src={image14}/></span>
                    <input style={{fontSize: '13px', borderTopRightRadius: '21px', borderBottomRightRadius: '21px', backgroundColor: '#F2F2F2', border: 'none'}} type="text" class="form-control" placeholder="Search for your favourite groups in ATG" aria-describedby="addon-wrapping" />
                </div>
                <div style={{marginRight: '3%', width: '200px', paddingTop: '15px', paddingBottom: '15px'}} class="btn-group">
                {user_signed_in ? <>
                <button class="btn btn-sm" type="button" style={{textAlign: 'right'}}>
                <div style={{display: 'flex'}}>
                    <img style={{marginTop: '-4px', width: '40px', height: '40px'}} src={image13} alt='profile pic'/>&nbsp;&nbsp;<p style={{marginTop: '5px'}}>Siddharth Goyal</p>
                </div>
                </button>
                <button disabled type="button" class="btn btn-sm dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                    <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                </> : <>
                <button data-bs-toggle="modal" data-bs-target="#createaccountmodal" class="btn btn-sm" type="button" style={{textAlign: 'right'}}>
                    Create account.<span style={{color: 'blue'}}> It's free!</span>
                </button>
                <button disabled type="button" class="btn btn-sm dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                    <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                </>}
                </div>
            </div>}
            <div style={{backgroundColor: 'black'}}>
                <img alt='banner' src={image2} style={{width: '100%', height: (breaking_point_desktop ? '440px' : (breaking_point_mobile ? '300px' : '200px')), marginTop: (breaking_point_desktop ? '72px' : ''), opacity: '0.5'}}/>
                <h2 className='celabel' style={{fontSize: (breaking_point_mobile ? '' : '18px'), fontWeight: '700', color: 'white', position: 'absolute', marginTop: (breaking_point_desktop ? '-150px' : (breaking_point_mobile ? '-100px' : '-70px'))}}>Computer Engineering</h2>
                <p className='celabel2' style={{fontSize: (breaking_point_mobile ? '' : '12px'), color: 'white', position: 'absolute', marginTop: (breaking_point_desktop ? '-110px' : (breaking_point_mobile ? '-65px' : '-40px'))}}>142,765 Computer Engineers follow this</p>
                {!breaking_point_desktop && <>
                <p><img alt='back' src={image28} style={{cursor: 'pointer', position: 'absolute', marginTop: (breaking_point_mobile ? '-275px' : '-183px'), marginLeft: '3.75%'}}/></p>
                {user_signed_in ? <button onClick={() => setUser_signed_in(false)} style={{position: 'absolute', borderColor: 'white', color: 'white', borderRadius: '4px', marginTop: (breaking_point_mobile ? '-298px' : '-205px'), right: '0', marginRight: '3.75%'}} class="btn btn-sm" type="button">Leave Group</button>:
                <button style={{position: 'absolute', borderColor: 'white', color: 'white', borderRadius: '4px', marginTop: (breaking_point_mobile ? '-298px' : '-205px'), right: '0', marginRight: '3.75%'}}  data-bs-toggle="offcanvas" data-bs-target="#createaccountcanvas" aria-controls="offcanvasBottom" class="btn btn-sm" type="button">Join Group</button>}</>}
            </div>
            <div className='whole'>
            {breaking_point_desktop ? <nav style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}} class="nav">
            <div style={{display: 'flex', flexDirection: 'row'}}>
      
            <a style={{color: 'black'}}class="nav-link active" aria-current="page" href="/#">All Posts(32)</a>
            <a style={{color: '#8A8A8A'}} class="nav-link" href="/#">Article</a>
            <a style={{color: '#8A8A8A'}} class="nav-link" href="/#">Event</a>
            <a style={{color: '#8A8A8A'}} class="nav-link" href="/#">Education</a>
            <a style={{color: '#8A8A8A'}} class="nav-link" href="/#">Job</a>
            </div><div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{marginRight: '3%', width: '133px'}} class="btn-group">
                <button class="btn btn-sm" style={{backgroundColor: '#EDEEF0'}} type="button">
                    Write a Post
                </button>
                <button type="button" style={{borderColor: '#EDEEF0', backgroundColor: '#EDEEF0'}} class="btn btn-light btn-sm dropdown-toggle dropdown-toggle-split">
                </button>
                </div>
                {user_signed_in ? 
                <button onClick={() => setUser_signed_in(false)} style={{width: '134px', color: '#6A6A6B', borderColor: '#6A6A6B'}} class="btn btn-sm" type="button">
                    <span><img style={{marginTop: '-2px'}} alt='->' src={image25} /></span> &nbsp; Leave Group
                </button>: 
                <button style={{width: '134px'}} data-bs-toggle="modal" data-bs-target="#createaccountmodal" class="btn btn-sm btn-primary" type="button">
                    <span><img alt='+' src={image15} /></span> &nbsp; Join Group
                </button>}</div>
            </nav> : <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <p style={{fontWeight: '600', marginLeft: '3.75%'}}>Posts(368)</p>
                    <button style={{marginBottom: '10px', marginTop: '-10px', marginRight: '3.75%', backgroundColor: '#F1F3F5', color: 'black'}} class="btn dropdown-toggle" type="button">
                        Filter: All
                    </button>
            </div>}
            </div>
            {breaking_point_desktop && <hr className='dividerhr'/>}
            <div className='wholeleft'>
            <div style={{width: (breaking_point_desktop ? '50%' : '100%'), overflowY: 'scroll', height: (breaking_point_desktop ? '83vh' : '94vh')}}>
            <div class="card" style={{width: '100%', boxShadow: (breaking_point_desktop ? '' : '0px 1px 2px rgba(0, 0, 0, 0.12)'), border: (breaking_point_desktop ? '' : 'none')}}>
            <img src={image3} class="card-img-top" alt="First Pic" />
            <div class="card-body">
                <h6 style={{fontWeight: '540'}} class="card-title">&#9997; Article</h6>
                <div style={{display: 'flex', justifyContent: 'space-between'}}><p style={{fontWeight: '700', width:'90%'}} class="card-text">What if famous brands had regular fonts? Meet RegulaBrands!</p>
                <div class="btn-group">
                <button style={{height: '25px', width: '25px'}} type="button" class="btn" data-bs-toggle="dropdown" aria-expanded="false">
                    <img style={{marginTop: '-16px', marginLeft: '-8px'}} alt='...' src={image16} />
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><button class="dropdown-item" type="button">Edit</button></li>
                    <li><button class="dropdown-item" type="button">Report</button></li>
                    <li><button class="dropdown-item" type="button">Option 3</button></li>
                </ul>
                </div>
                </div> 
                <h6 style={{marginBottom: '30px', color: '#5C5C5C', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>I’ve worked in UX for the better part of a decade. From now on, I plan to reidf bsgakksa shly akssdjj shadkj</h6>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                {breaking_point_desktop ? <>
                <div style={{display: 'flex'}}>
                    <img style={{width: '40px', height: '40px'}} src={image10} alt='user1' />&nbsp;&nbsp;<h6 style={{fontSize: '15px', fontWeight: '700', marginTop: '10px'}}>Sarthak Kamra</h6>
                </div>
                <div style={{display: 'flex'}}>
                    <img alt='views' style={{width: '18px', height: '18px', marginTop: '10px'}} src="https://img.icons8.com/material-outlined/24/525252/visible--v1.jpg"/>&nbsp;<p style={{fontSize: '15px', color: '#525252', marginTop: '7.5px', marginBottom: '0px'}}>1.4k views</p> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="btn" style={{backgroundColor: '#EDEEF0'}} type="button">
                    <img alt='share' src={image17} />
                    </button>
                </div></> : <>
                <div style={{display: 'flex'}}>
                    <img style={{width: '40px', height: '40px'}} src={image10} alt='user1' />&nbsp;&nbsp;
                    <div style={{display: 'flex', flexDirection: 'column'}}><h6 style={{fontSize: '15px', fontWeight: '700'}}>Sarthak Kamra</h6>
                    <p style={{fontSize: '15px', color: '#525252', marginTop: '-8px', marginBottom: '0px'}}>1.4k views</p></div>
                </div>
                <div style={{display: 'flex'}}> 
                    <button class="btn" style={{backgroundColor: '#EDEEF0'}} type="button">
                    <img style={{marginTop: '-3px'}} alt='share' src={image17} />&nbsp; Share
                    </button>
                </div></>}
                </div>
            </div>
            </div>
            <br />
            <div class="card" style={{width: '100%', boxShadow: (breaking_point_desktop ? '' : '0px 1px 2px rgba(0, 0, 0, 0.12)'), border: (breaking_point_desktop ? '' : 'none')}}>
            <img src={image4} class="card-img-top" alt="Sec Pic" />
            <div class="card-body">
                <h6 style={{fontWeight: '540'}} class="card-title">&#128300; Education</h6>
                <div style={{display: 'flex', justifyContent: 'space-between'}}><p style={{fontWeight: '700', width:'90%'}} class="card-text">Tax Benefits for Investment under National Pension Scheme launched by Government</p>
                <div class="btn-group">
                <button style={{height: '25px', width: '25px'}} type="button" class="btn" data-bs-toggle="dropdown" aria-expanded="false">
                    <img style={{marginTop: '-16px', marginLeft: '-8px'}} alt='...' src={image16} />
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><button class="dropdown-item" type="button">Edit</button></li>
                    <li><button class="dropdown-item" type="button">Report</button></li>
                    <li><button class="dropdown-item" type="button">Option 3</button></li>
                </ul>
                </div></div> 
                <h6 style={{marginBottom: '30px', color: '#5C5C5C', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>I’ve worked in UX for the better part of a decade. From now on, I plan to reidf bsgakksa shly akssdjj shadkj</h6>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                {breaking_point_desktop ? <>
                <div style={{display: 'flex'}}>
                    <img style={{width: '40px', height: '40px'}} src={image11} alt='user1' />&nbsp;&nbsp;<h6 style={{fontSize: '15px', fontWeight: '700', marginTop: '10px'}}>Sarah West</h6>
                </div>
                <div style={{display: 'flex'}}>
                    <img alt='views' style={{width: '18px', height: '18px', marginTop: '10px'}} src="https://img.icons8.com/material-outlined/24/525252/visible--v1.jpg"/>&nbsp;<p style={{fontSize: '15px', color: '#525252', marginTop: '7.5px', marginBottom: '0px'}}>1.4k views</p> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="btn" style={{backgroundColor: '#EDEEF0'}} type="button">
                    <img alt='share' src={image17} />
                    </button>
                </div></> : <>
                <div style={{display: 'flex'}}>
                    <img style={{width: '40px', height: '40px'}} src={image11} alt='user1' />&nbsp;&nbsp;
                    <div style={{display: 'flex', flexDirection: 'column'}}><h6 style={{fontSize: '15px', fontWeight: '700'}}>Sarah West</h6>
                    <p style={{fontSize: '15px', color: '#525252', marginTop: '-8px', marginBottom: '0px'}}>4.8k views</p></div>
                </div>
                <div style={{display: 'flex'}}> 
                    <button class="btn" style={{backgroundColor: '#EDEEF0'}} type="button">
                    <img style={{marginTop: '-3px'}} alt='share' src={image17} />&nbsp; Share
                    </button>
                </div></>}
                </div>
            </div>
            </div>
            <br />
            <div class="card" style={{width: '100%', boxShadow: (breaking_point_desktop ? '' : '0px 1px 2px rgba(0, 0, 0, 0.12)'), border: (breaking_point_desktop ? '' : 'none')}}>
            <img src={image5} class="card-img-top" alt="Third Pic" />
            <div class="card-body">
                <h6 style={{fontWeight: '540'}} class="card-title">&#128197; Meetup</h6>
                <div style={{display: 'flex', justifyContent: 'space-between'}}><p style={{fontWeight: '700', width:'90%'}} class="card-text">Finance & Investment Elite Social Mixer @Lujiazui</p>
                <div class="btn-group">
                <button style={{height: '25px', width: '25px'}} type="button" class="btn" data-bs-toggle="dropdown" aria-expanded="false">
                    <img style={{marginTop: '-16px', marginLeft: '-8px'}} alt='...' src={image16} />
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><button class="dropdown-item" type="button">Edit</button></li>
                    <li><button class="dropdown-item" type="button">Report</button></li>
                    <li><button class="dropdown-item" type="button">Option 3</button></li>
                </ul>
                </div></div>
                <div style={{display: 'flex'}}>
                    <img alt='views' style={{marginTop: '2px', width: '15px', height: '15px'}} src={image19} />&nbsp;<p style={{fontSize: '14px', color: 'black'}}>Fri, 12 Oct, 2018</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img alt='views' style={{marginTop: '2px', width: '10px', height: '15px'}} src={image21} />&nbsp;<p style={{fontSize: '14px', color: 'black'}}>Ahmedabad, India</p>
                </div>
                <button style={{borderRadius: '8px', color: '#E56135', borderColor: '#A9AEB8'}} type="button" class="btn w-100">Visit Website</button>
                <br /><br />
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                {breaking_point_desktop ? <>
                <div style={{display: 'flex'}}>
                    <img style={{width: '40px', height: '40px'}} src={image12} alt='user1' />&nbsp;&nbsp;<h6 style={{fontSize: '15px', fontWeight: '700', marginTop: '10px'}}>Ronal Jones</h6>
                </div>
                <div style={{display: 'flex'}}>
                    <img alt='views' style={{width: '18px', height: '18px', marginTop: '10px'}} src="https://img.icons8.com/material-outlined/24/525252/visible--v1.jpg"/>&nbsp;<p style={{fontSize: '15px', color: '#525252', marginTop: '7.5px', marginBottom: '0px'}}>1.4k views</p> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="btn" style={{backgroundColor: '#EDEEF0'}} type="button">
                    <img alt='share' src={image17} />
                    </button>
                </div></> : <>
                <div style={{display: 'flex'}}>
                    <img style={{width: '40px', height: '40px'}} src={image12} alt='user1' />&nbsp;&nbsp;
                    <div style={{display: 'flex', flexDirection: 'column'}}><h6 style={{fontSize: '15px', fontWeight: '700'}}>Ronal Jones</h6>
                    <p style={{fontSize: '15px', color: '#525252', marginTop: '-8px', marginBottom: '0px'}}>800 views</p></div>
                </div>
                <div style={{display: 'flex'}}> 
                    <button class="btn" style={{backgroundColor: '#EDEEF0'}} type="button">
                    <img style={{marginTop: '-3px'}} alt='share' src={image17} />&nbsp; Share
                    </button>
                </div></>}
                </div>
            </div>
            </div>
            <br />
            <div class="card" style={{width: '100%', boxShadow: (breaking_point_desktop ? '' : '0px 1px 2px rgba(0, 0, 0, 0.12)'), border: (breaking_point_desktop ? '' : 'none')}}>
            <div class="card-body">
                <h6 style={{fontWeight: '540'}} class="card-title">&#128188; Job</h6>
                <div style={{display: 'flex', justifyContent: 'space-between'}}><p style={{fontWeight: '700', width:'90%'}} class="card-text">Software Developer</p>
                <div class="btn-group">
                <button style={{height: '25px', width: '25px'}} type="button" class="btn" data-bs-toggle="dropdown" aria-expanded="false">
                    <img style={{marginTop: '-16px', marginLeft: '-8px'}} alt='...' src={image16} />
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><button class="dropdown-item" type="button">Edit</button></li>
                    <li><button class="dropdown-item" type="button">Report</button></li>
                    <li><button class="dropdown-item" type="button">Option 3</button></li>
                </ul>
                </div></div>
                <div style={{display: 'flex'}}>
                    <img alt='views' style={{marginTop: '2px', width: '15px', height: '15px'}} src={image20} />&nbsp;<p style={{fontSize: '14px', color: 'black', width: (breaking_point_desktop ? '' : '150px'), overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>Innovaccer Analytics Private Ltd.</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img alt='views' style={{marginTop: '2px', width: '10px', height: '15px'}} src={image21} />&nbsp;<p style={{fontSize: '14px', color: 'black'}}>Noida, India</p>
                </div>
                <button style={{borderRadius: '8px', color: '#02B875', borderColor: '#A9AEB8'}} type="button" class="btn w-100">Apply on Timesjobs</button>
                <br /><br />
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                {breaking_point_desktop ? <>
                <div style={{display: 'flex'}}>
                    <img style={{width: '40px', height: '40px'}} src={image13} alt='user1' />&nbsp;&nbsp;<h6 style={{fontSize: '15px', fontWeight: '700', marginTop: '10px'}}>Joseph Gray</h6>
                </div>
                <div style={{display: 'flex'}}>
                    <img alt='views' style={{width: '18px', height: '18px', marginTop: '10px'}} src="https://img.icons8.com/material-outlined/24/525252/visible--v1.jpg"/>&nbsp;<p style={{fontSize: '15px', color: '#525252', marginTop: '7.5px', marginBottom: '0px'}}>1.4k views</p> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="btn" style={{backgroundColor: '#EDEEF0'}} type="button">
                    <img alt='share' src={image17} />
                    </button>
                </div></> : <>
                <div style={{display: 'flex'}}>
                    <img style={{width: '40px', height: '40px'}} src={image13} alt='user1' />&nbsp;&nbsp;
                    <div style={{display: 'flex', flexDirection: 'column'}}><h6 style={{fontSize: '15px', fontWeight: '700'}}>Joseph Gray</h6>
                    <p style={{fontSize: '15px', color: '#525252', marginTop: '-8px', marginBottom: '0px'}}>1.7k views</p></div>
                </div>
                <div style={{display: 'flex'}}> 
                    <button class="btn" style={{backgroundColor: '#EDEEF0'}} type="button">
                    <img style={{marginTop: '-3px'}} alt='share' src={image17} />&nbsp; Share
                    </button>
                </div></>}
                </div>
            </div>
            </div>
            <br />
            <br />
            <br />
            </div>
            {breaking_point_desktop && <div className='wholeright'>
                <br/>
                <div class="input-group flex-nowrap">
                    <span style={{paddingLeft: '0px', paddingRight: '1px', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderColor: '#B8B8B8', borderBottomLeftRadius: '0px', background: 'white'}} class="input-group-text" id="addon-wrapping"><img alt='location' src={image21} /></span>
                    <input disabled={!location_edit_enabled} style={{background: 'white', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderColor: '#B8B8B8', color: 'black'}} type="text" class="form-control" placeholder="Enter your location" value={location} onChange={(e) => {setLocation(e.target.value)}} aria-describedby="addon-wrapping" />
                    {location_edit_enabled ? <>
                    <span style={{borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderColor: '#B8B8B8', borderBottomRightRadius: '0px', background: 'white'}} class="input-group-text" id="addon-wrapping">
                    <button onClick={() => setLocation_edit_enabled(false)} style={{marginRight: '-15px'}} type="button" class="btn">
                    <img style={{margin: 'none'}} alt='location' src={image23}/>
                    </button></span>
                    </> : <>
                    <span style={{borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderColor: '#B8B8B8', borderBottomRightRadius: '0px', background: 'white'}} class="input-group-text" id="addon-wrapping">
                    <button onClick={() => setLocation_edit_enabled(true)} style={{marginRight: '-15px'}} type="button" class="btn">
                    <img style={{margin: 'none'}} alt='location' src={image18}/>
                    </button></span>
                    </>}
                </div>
                <br />
                <div  style={{display: 'flex'}}>
                    <img style={{color: 'gray', marginTop: '5px', marginRight: '5px', height: '13.3px', width:'13.3px'}} alt='info' src={image22} />
                    <p style={{color: 'gray', fontSize: '15px'}}>Your location will help us serve better and extend a personalised experience.</p>
                    
                
                </div>
                <div style={{display: (!user_signed_in && 'none')}}>
                <br />
                <br />
                <h6><img style={{marginTop: '-5px'}} src={image24} alt=''/> RECOMMENDED GROUPS</h6>
                {recommended_groups.map((group) => <>
                    <br />
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div style={{display: 'flex'}}>
                            <img style={{width: '40px', height: '40px'}} src={group[0]} alt='grp1'/>&nbsp;&nbsp;<h6 style={{fontSize: '15px', fontWeight: '600', marginTop: '10px'}}>{group[1]}</h6>
                        </div>
                        <button onClick={() => Updating_follow_grp(group[1])} type="button" style={{backgroundColor: (group[2] ? 'black' : '#EDEEF0'), borderRadius: '21px', color: (group[2] ? 'white' : 'black'), width: (group[2] ? '100px' : '85px'), height: '30px', marginTop: '6px', paddingTop: '2px'}} class="btn">{group[2] ? 'Followed' : 'Follow'}</button>
                    </div>
                </>)}
                <br /><br /><br />
                <p style={{color: '#2F6CE5', fontSize: '13px', textAlign: 'right'}}>See More...</p>
                </div>
            </div>}
            </div>
            <div class="modal fade" id="createaccountmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <button className='closebtn' style={{position: 'relative', backgroundColor: 'transparent', border: 'none', top: '200px'}} type="button" data-bs-dismiss="modal" aria-label="Close"><img alt='close' src={image26} /></button>
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div style={{borderRadius: '8px', border: 'none'}} class="modal-content">
                <div style={{borderTopLeftRadius: '8px', borderTopRightRadius: '8px', border: 'none', backgroundColor: '#EFFFF4', color: '#008A45', fontSize: '15px'}} class="modal-header">
                    <h7 style={{margin: '0 auto'}} class="modal-title" id="exampleModalLabel">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</h7>
                </div>
                <div class="modal-body">
                    <div style={{marginLeft: '10px', marginRight: '10px', display: 'flex', justifyContent:'space-between'}}>
                        <h3 style={{fontWeight: '700'}}>Create Account</h3>
                        <p style={{fontSize: '15px'}}>Already have an account? <span data-bs-toggle="modal" data-bs-target="#signupmodal" data-bs-dismiss="modal" style={{cursor: 'pointer', color: 'blue'}}>Sign In</span></p>
                    </div>
                    <br />
                    <div style={{marginBottom: '5px', marginLeft: '10px', marginRight: '10px', display: 'flex', justifyContent: 'space-evenly'}}>
                        <div style={{width: '50%'}}>
                            <div style={{display: 'flex'}}>
                            <input style={{height: '45px', borderRight: 'none', borderRadius: '0px', backgroundColor: '#F7F8FA'}} type="text" class="form-control" placeholder="First Name" aria-describedby="addon-wrapping" />
                            <input style={{height: '45px', borderRadius: '0px', backgroundColor: '#F7F8FA'}} type="text" class="form-control" placeholder="Last Name" aria-describedby="addon-wrapping" />
                            </div>
                            <input style={{height: '45px', borderTop: 'none', borderRadius: '0px', backgroundColor: '#F7F8FA'}} type="text" class="form-control" placeholder="Email" aria-describedby="addon-wrapping" />
                            <input style={{height: '45px', borderTop: 'none', borderRadius: '0px', backgroundColor: '#F7F8FA'}} type="password" class="form-control" placeholder="Password" aria-describedby="addon-wrapping" />
                            <input style={{height: '45px', borderTop: 'none', borderRadius: '0px', backgroundColor: '#F7F8FA'}} type="password" class="form-control" placeholder="Confirm Password" aria-describedby="addon-wrapping" />
                            <button onClick={() => setUser_signed_in(true)} data-bs-dismiss="modal" style={{height: '45px', marginTop: '15px', borderRadius: '25px', width: '100%'}} type="button" class="btn btn-primary">Create Account</button>
                            <br /><br />
                            <button onClick={() => setUser_signed_in(true)} data-bs-dismiss="modal" style={{height: '40px', marginBottom: '5px', width: '100%', borderColor: '#D9D9DB'}} class="btn btn-sm" type="button">
                                <img alt='fb sign up' src={image30} />
                            </button>
                            <button onClick={() => setUser_signed_in(true)} data-bs-dismiss="modal" style={{height: '40px', width: '100%', borderColor: '#D9D9DB'}} class="btn btn-sm" type="button">
                                <img alt='google sign up' src={image29} />
                            </button>
                        </div>
                        <div style={{display: 'grid', width: '50%'}}>
                            <img style={{margin:'0 auto'}} alt='abstract' src={image32} />
                            <p style={{marginTop: '10px', textAlign: 'center', color: 'gray', fontSize: '11px'}}>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div class="modal fade" id="signupmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <button className='closebtn' style={{position: 'relative', backgroundColor: 'transparent', border: 'none', top: '222px'}} type="button" data-bs-dismiss="modal" aria-label="Close"><img alt='close' src={image26} /></button>
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div style={{borderRadius: '8px', border: 'none'}} class="modal-content">
                <div style={{borderTopLeftRadius: '8px', borderTopRightRadius: '8px', border: 'none', backgroundColor: '#EFFFF4', color: '#008A45', fontSize: '15px'}} class="modal-header">
                    <h7 style={{margin: '0 auto'}} class="modal-title" id="exampleModalLabel">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</h7>
                </div>
                <div class="modal-body">
                    <div style={{marginLeft: '10px', marginRight: '10px', display: 'flex', justifyContent:'space-between'}}>
                        <h3 style={{fontWeight: '700'}}>Sign In</h3>
                        <p style={{fontSize: '15px'}}>Don't have an account yet? <span data-bs-toggle="modal" data-bs-target="#createaccountmodal" data-bs-dismiss="modal" style={{cursor: 'pointer', color: 'blue'}}>Create new for free!</span></p>
                    </div>
                    <br />
                    <div style={{marginBottom: '5px', marginLeft: '10px', marginRight: '10px', display: 'flex', justifyContent: 'space-evenly'}}>
                        <div style={{width: '50%'}}>
                            <input style={{height: '45px', borderRadius: '0px', backgroundColor: '#F7F8FA'}} type="text" class="form-control" placeholder="Email" aria-describedby="addon-wrapping" />
                            <input style={{height: '45px', borderTop: 'none', borderRadius: '0px', backgroundColor: '#F7F8FA'}} type="password" class="form-control" placeholder="Password" aria-describedby="addon-wrapping" />
                            <button onClick={() => setUser_signed_in(true)} data-bs-dismiss="modal" style={{height: '45px', marginTop: '15px', borderRadius: '25px', width: '100%'}} type="button" class="btn btn-primary">Create Account</button>
                            <br /><br />
                            <button onClick={() => setUser_signed_in(true)} data-bs-dismiss="modal" style={{height: '40px', marginBottom: '5px', width: '100%', borderColor: '#D9D9DB'}} class="btn btn-sm" type="button">
                                <img alt='fb sign up' src={image30} />
                            </button>
                            <button onClick={() => setUser_signed_in(true)} data-bs-dismiss="modal" style={{height: '40px', width: '100%', borderColor: '#D9D9DB'}} class="btn btn-sm" type="button">
                                <img alt='google sign up' src={image29} />
                            </button>
                            <p style={{cursor: 'pointer', fontSize: '13px', fontWeight: '600', marginTop: '15px', textAlign: 'center'}}>Forgot Password?</p>
                        </div>
                        <div style={{display: 'grid', width: '50%'}}>
                            <img style={{margin:'0 auto', marginBottom: '-10px'}} alt='abstract' src={image32} />
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div style={{borderRadius: '8px 8px 0px 0px', height: '500px'}} class="offcanvas offcanvas-bottom" tabindex="-1" id="createaccountcanvas" aria-labelledby="offcanvasBottomLabel">
            <div class="offcanvas-header">
                <h3 style={{fontWeight: '700', marginTop: '5px', marginBottom: '-5px'}}>Create Account</h3>
                <button style={{marginBottom: '-5px'}} type="button" class="btn text-reset" data-bs-dismiss="offcanvas" aria-label="Close"><img alt='close' src={image27} /></button>
            </div>
            <div class="offcanvas-body">
                <div style={{display: 'flex'}}>
                    <input style={{height: '45px', borderRight: 'none', borderRadius: '0px', backgroundColor: '#F7F8FA'}} type="text" class="form-control" placeholder="First Name" aria-describedby="addon-wrapping" />
                    <input style={{height: '45px', borderRadius: '0px', backgroundColor: '#F7F8FA'}} type="text" class="form-control" placeholder="Last Name" aria-describedby="addon-wrapping" />
                </div>
                <input style={{height: '45px', borderTop: 'none', borderRadius: '0px', backgroundColor: '#F7F8FA'}} type="text" class="form-control" placeholder="Email" aria-describedby="addon-wrapping" />
                <input style={{height: '45px', borderTop: 'none', borderRadius: '0px', backgroundColor: '#F7F8FA'}} type="password" class="form-control" placeholder="Password" aria-describedby="addon-wrapping" />
                <input style={{height: '45px', borderTop: 'none', borderRadius: '0px', backgroundColor: '#F7F8FA'}} type="password" class="form-control" placeholder="Confirm Password" aria-describedby="addon-wrapping" />
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <button onClick={() => setUser_signed_in(true)} data-bs-dismiss="offcanvas" style={{height: '45px', marginTop: '15px', borderRadius: '25px', width: '100%'}} type="button" class="btn btn-primary w-50">Create Account</button>
                <p data-bs-toggle="offcanvas" data-bs-target="#signupcanvas" data-bs-dismiss="offcanvas" style={{color: '#495057', textDecoration:'underline', cursor: 'pointer', marginTop: '25px', marginBottom: '5px'}}>or, Sign In</p>
                </div>
                <br />
                <button onClick={() => setUser_signed_in(true)} data-bs-dismiss="offcanvas" style={{height: '40px', marginBottom: '10px', width: '100%', borderColor: '#D9D9DB'}} class="btn btn-sm" type="button">
                    <img alt='fb sign up' src={image30} />
                </button>
                <button onClick={() => setUser_signed_in(true)} data-bs-dismiss="offcanvas" style={{height: '40px', marginBottom: '20px', width: '100%', borderColor: '#D9D9DB'}} class="btn btn-sm" type="button">
                    <img alt='google sign up' src={image29} />
                </button>
                <p style={{fontSize: '12px', textAlign: 'center', margin: '0px 40px 0px 40px'}}>By signing up, you agree to our Terms & conditions, Privacy policy</p>
            </div>
            </div>
            <div style={{borderRadius: '8px 8px 0px 0px', height: '500px'}} class="offcanvas offcanvas-bottom" tabindex="-1" id="signupcanvas" aria-labelledby="offcanvasBottomLabel">
            <div class="offcanvas-header">
                <h3 style={{fontWeight: '700', marginTop: '5px', marginBottom: '-5px'}}>Welcome back!</h3>
                <button style={{marginBottom: '-5px'}} type="button" class="btn text-reset" data-bs-dismiss="offcanvas" aria-label="Close"><img alt='close' src={image27} /></button>
            </div>
            <div class="offcanvas-body">
                <input style={{height: '45px', borderRadius: '0px', backgroundColor: '#F7F8FA'}} type="text" class="form-control" placeholder="Email" aria-describedby="addon-wrapping" />
                <input style={{height: '45px', borderTop: 'none', borderRadius: '0px', backgroundColor: '#F7F8FA'}} type="password" class="form-control" placeholder="Password" aria-describedby="addon-wrapping" />
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <button onClick={() => setUser_signed_in(true)} data-bs-dismiss="offcanvas" style={{height: '45px', marginTop: '15px', borderRadius: '25px', width: '100%'}} type="button" class="btn btn-primary w-50">Sign In</button>
                <p data-bs-toggle="offcanvas" data-bs-target="#createaccountcanvas" data-bs-dismiss="offcanvas"  style={{color: '#495057', textDecoration:'underline', cursor: 'pointer', marginTop: '25px', marginBottom: '5px'}}>or, Create Account</p>
                </div>
                <br />
                <button onClick={() => setUser_signed_in(true)} data-bs-dismiss="offcanvas" style={{height: '40px', marginBottom: '10px', width: '100%', borderColor: '#D9D9DB'}} class="btn btn-sm" type="button">
                    <img alt='fb sign up' src={image30} />
                </button>
                <button onClick={() => setUser_signed_in(true)} data-bs-dismiss="offcanvas" style={{height: '40px', marginBottom: '20px', width: '100%', borderColor: '#D9D9DB'}} class="btn btn-sm" type="button">
                    <img alt='google sign up' src={image29} />
                </button>
                <p style={{fontWeight: '600', fontSize: '12px', textAlign: 'center', margin: '0px 40px 0px 40px'}}>Forgot Password?</p>
            </div>
            </div>
            {!breaking_point_desktop && <a href='/#' style={{position: 'fixed', right: '10px', bottom: '10px'}}><img style={{cursor: 'pointer'}} alt='float' src={image31} /></a>}
        </div>
    )
}

export default WebPage;