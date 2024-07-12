import React,{useState} from 'react';
import {FormControl,FormControlLabel,Radio,RadioGroup,Typography,TextField,MenuItem,Button}from '@mui/material';

const Home=()=>{
  const[isStudying,setIsStudying]=useState(null);
  const[educationLevel,setEducationLevel]=useState(null);
  const[careerStatus,setCareerStatus]=useState(null);
  const[schoolName,setSchoolName]=useState('');
  const[grade,setGrade]=useState('');
  const[collegeName,setCollegeName]=useState('');
  const[degree,setDegree]=useState('');
  const[graduationYear,setGraduationYear]=useState('');
  const[companyName,setCompanyName]=useState('');
  const[experience,setExperience]=useState('');
  const[jobTitle,setJobTitle]=useState('');

  const resetFields=()=>{
    setEducationLevel(null);
    setCareerStatus(null);
    setSchoolName('');
    setGrade('');
    setCollegeName('');
    setDegree('');
    setGraduationYear('');
    setCompanyName('');
    setExperience('');
    setJobTitle('');
  };

  const handleStudyingChange=(value)=>{
    setIsStudying(value);
    resetFields();
  };

  const handleSubmit=()=>{
    alert('Form submitted!');
  };

  const isSubmitEnabled=()=>{
    if (isStudying==='yes'){
      if (educationLevel==='school'){
        return schoolName&&grade;
      }else if(educationLevel==='college'){
        return collegeName&&degree&&graduationYear;
      }
    } else if(isStudying==='no'){
      if (careerStatus==='job'){
        return collegeName&&degree&&graduationYear;
      } else if(careerStatus==='working'){
        return companyName&&experience&&jobTitle;
      }
    }
    return false;
  };

  return(
    <div style={{textAlign:'center',marginTop:'150px'}}>
      <Typography variant="h4">Hi Khaled, Welcome to Geeks of Gurukul</Typography>
      
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'20px'}}>
      <FormControl component="fieldset" style={{ marginTop:'20px'}}>
        <Typography variant="h6">Are you currently studying?</Typography>
        <RadioGroup
          row
          aria-label="studying"
          name="studying"
          onChange={(e)=>handleStudyingChange(e.target.value)}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes"/>
          <FormControlLabel value="no" control={<Radio />} label="No"/>
        </RadioGroup>
      </FormControl>

      {isStudying&&(
        <div style={{marginTop:'20px'}}>
          <Typography variant="h6">Are you currently?</Typography>
          <FormControl component="fieldset" style={{marginTop:'10px'}}>
            <RadioGroup
              row
              aria-label="details"
              name="details"
              onChange={(e)=>{
                if(isStudying==='yes'){
                  setEducationLevel(e.target.value);
                }else{
                  setCareerStatus(e.target.value);
                }
              }}
            >
              {isStudying==='yes'?(
                <>
                  <FormControlLabel value="school" control={<Radio />} label="In School"/>
                  <FormControlLabel value="college" control={<Radio />} label="In College"/>
                </>
              ) : (
                <>
                  <FormControlLabel value="job" control={<Radio />} label="Looking for a Job"/>
                  <FormControlLabel value="working" control={<Radio />} label="Currently Working"/>
                </>
              )}
            </RadioGroup>
          </FormControl>
        </div>
      )}

      {educationLevel==='school'&&(
        <div style={{marginTop:'20px',width:'40%'}}>
          <TextField
            label="School Name"
            variant="outlined"
            value={schoolName}
            onChange={(e)=>setSchoolName(e.target.value)}
            fullWidth
            margin="normal"
            InputProps={{
              style:{borderRadius:20}  
            }}
          />
          <TextField
            select
            label="Select your grade"
            value={grade}
            onChange={(e)=>setGrade(e.target.value)}
            fullWidth
            margin="normal"
            InputProps={{
              style:{borderRadius:20}  
            }}
          >
            <MenuItem value="one">One</MenuItem>
            <MenuItem value="two">Two</MenuItem>
            <MenuItem value="three">Three</MenuItem>
            <MenuItem value="four">Four</MenuItem>
            <MenuItem value="five">Five</MenuItem>
            <MenuItem value="six">Six</MenuItem>
            <MenuItem value="seven">Seven</MenuItem>
            <MenuItem value="eight">Eight</MenuItem>
            <MenuItem value="nine">Nine</MenuItem>
            <MenuItem value="ten">Ten</MenuItem>
            <MenuItem value="eleven">Eleven</MenuItem>
            <MenuItem value="twelve">Twelve</MenuItem>
          </TextField>
        </div>
      )}

      {educationLevel==='college'&&(
        <div style={{marginTop:'20px',width:'40%'}}>
          <TextField
            label="College Name"
            variant="outlined"
            value={collegeName}
            onChange={(e)=>setCollegeName(e.target.value)}
            fullWidth
            margin="normal"
            InputProps={{
              style:{borderRadius:20}  
            }}
          />
          <TextField
            select
            label="Select your latest degree"
            value={degree}
            onChange={(e)=>setDegree(e.target.value)}
            fullWidth
            margin="normal"
            InputProps={{
              style:{borderRadius:20}  
            }}
          >
            <MenuItem value="BBA">BBA</MenuItem>
            <MenuItem value="MBA">MBA</MenuItem>
            <MenuItem value="CSE">CSE</MenuItem>
            <MenuItem value="EEE">EEE</MenuItem>
          </TextField>
          <TextField
            select
            label="Select your graduation year"
            value={graduationYear}
            onChange={(e)=>setGraduationYear(e.target.value)}
            fullWidth
            margin="normal"
            InputProps={{
              style:{borderRadius:20}  
            }}
          >
            <MenuItem value="2015">2015</MenuItem>
            <MenuItem value="2016">2016</MenuItem>
            <MenuItem value="2017">2017</MenuItem>
            <MenuItem value="2018">2018</MenuItem>
            <MenuItem value="2019">2019</MenuItem>
            <MenuItem value="2020">2020</MenuItem>
            <MenuItem value="2021">2021</MenuItem>
          </TextField>
        </div>
      )}

      {careerStatus==='job'&&(
        <div style={{marginTop:'20px',width:'40%'}}>
          <TextField
            label="Last College Name"
            variant="outlined"
            value={collegeName}
            onChange={(e)=>setCollegeName(e.target.value)}
            fullWidth
            margin="normal"
            InputProps={{
              style:{borderRadius:20}  
            }}
          />
          <TextField
            select
            label="Select your latest degree"
            value={degree}
            onChange={(e)=>setDegree(e.target.value)}
            fullWidth
            margin="normal"
            InputProps={{
              style:{borderRadius:20}  
            }}
          >
            <MenuItem value="BBA">BBA</MenuItem>
            <MenuItem value="MBA">MBA</MenuItem>
            <MenuItem value="CSE">CSE</MenuItem>
            <MenuItem value="EEE">EEE</MenuItem>
          </TextField>
          <TextField
            select
            label="Select your graduation year"
            value={graduationYear}
            onChange={(e)=>setGraduationYear(e.target.value)}
            fullWidth
            margin="normal"
            InputProps={{
              style:{borderRadius:20}  
            }}
          >
            <MenuItem value="2015">2015</MenuItem>
            <MenuItem value="2016">2016</MenuItem>
            <MenuItem value="2017">2017</MenuItem>
            <MenuItem value="2018">2018</MenuItem>
            <MenuItem value="2019">2019</MenuItem>
            <MenuItem value="2020">2020</MenuItem>
            <MenuItem value="2021">2021</MenuItem>
          </TextField>
        </div>
      )}

      {careerStatus==='working'&&(
        <div style={{marginTop:'20px',width:'40%'}}>
          <TextField
            label="Company Name"
            variant="outlined"
            value={companyName}
            onChange={(e)=>setCompanyName(e.target.value)}
            fullWidth
            margin="normal"
            InputProps={{
              style:{borderRadius:20}  
            }}
          />
          <TextField
            select
            label="Select your experience"
            value={experience}
            onChange={(e)=>setExperience(e.target.value)}
            fullWidth
            margin="normal"
            InputProps={{
              style:{borderRadius:20}  
            }}
          >
            <MenuItem value="one">One</MenuItem>
            <MenuItem value="two">Two</MenuItem>
            <MenuItem value="three">Three</MenuItem>
            <MenuItem value="four">Four</MenuItem>
            <MenuItem value="fice">Five</MenuItem>
            <MenuItem value="six">Six</MenuItem>
          </TextField>
          <TextField
            select
            label="Select your job title"
            value={jobTitle}
            onChange={(e)=>setJobTitle(e.target.value)}
            fullWidth
            margin="normal"
            InputProps={{
              style:{borderRadius:20}  
            }}
          >
            <MenuItem value="full-stack developer">Full Stack Developer</MenuItem>
            <MenuItem value="Ai engineer">AI Engineer</MenuItem>
          </TextField>
        </div>
      )}

      <Button
        variant="contained"
        color="primary"
        style={{ marginTop:'20px',width:'300px',borderRadius:'20'}}
        onClick={handleSubmit}
        disabled={!isSubmitEnabled()}
      >
        Submit
      </Button>
    </div>
    </div>
  );
};

export default Home;
