import DesignerLayout from "@/layouts/designer_layout"
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import { useRef, useState } from "react"
import { Button, ButtonBase } from "@mui/material";

export const Description = () => {
      const [activeStep, setActiveStep] = useState(0);
      const handleNext = () => {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };

      const handleBack = () => {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };

      const handleReset = () => {
            setActiveStep(0);
      };
      return (
            <>

                  <DesignerLayout is_login={true}>
                        <section aria-label="section" style={{ marginTop: 0, paddingTop: 20, minHeight: '900px' }}>

                              <section aria-label="section" style={{ marginTop: 0, paddingTop: 20, minHeight: '900px' }}>
                                    <div className="container">

                                          <h4>Hướng dãn tạo thiết kế và mẫu thiết kế</h4>
                                          <Stepper activeStep={activeStep} orientation="vertical" >
                                                <Step>
                                                      <StepLabel onClick={() => setActiveStep(0)}>
                                                            Tải mãu áo nền
                                                      </StepLabel>
                                                      <StepContent>
                                                            <img src="images/huong_dan/buoc1.png" height={'80%'} width={'120%'}></img>
                                                            <div style={{ width: '100px', borderRadius: 10 }}>
                                                                  <ButtonBase
                                                                        onClick={() => handleNext()
                                                                        }
                                                                        style={{ marginTop: 10, backgroundColor: 'black' }}
                                                                  >
                                                                        Next
                                                                  </ButtonBase>
                                                            </div>

                                                      </StepContent>
                                                </Step>


                                                <Step>
                                                      <StepLabel onClick={() => setActiveStep(1)}>
                                                            Thiét kế trên mẫu áo nền
                                                      </StepLabel>
                                                      <StepContent>
                                                            <img src="images/mau_ao_nen/trang.jpg" height={500} ></img>
                                                            <div style={{ width: '100px', borderRadius: 10, display: 'flex' }}>
                                                                  <ButtonBase
                                                                        onClick={() => handleNext()
                                                                        }
                                                                        style={{ marginTop: 10, marginRight: 10, backgroundColor: 'black' }}
                                                                  >
                                                                        Next
                                                                  </ButtonBase>
                                                                  <ButtonBase
                                                                        onClick={() => handleBack()
                                                                        }
                                                                        style={{ marginTop: 10, backgroundColor: 'black' }}
                                                                  >
                                                                        Back
                                                                  </ButtonBase>
                                                            </div>
                                                      </StepContent>
                                                </Step>


                                                <Step>
                                                      <StepLabel onClick={() => setActiveStep(2)}>
                                                            Upload thiết ké
                                                      </StepLabel>
                                                      <StepContent>
                                                            <img src="images/mau_ao_nen/trang.jpg" height={500} ></img>
                                                            <div style={{ width: '100px', borderRadius: 10 }}>
                                                                  <ButtonBase
                                                                        onClick={() => handleBack()
                                                                        }
                                                                        style={{ marginTop: 10, backgroundColor: 'black' }}
                                                                  >
                                                                        Back
                                                                  </ButtonBase>
                                                            </div>
                                                      </StepContent>
                                                </Step>
                                          </Stepper>
                                    </div>
                              </section>

                        </section >
                  </DesignerLayout >

            </>


      )
}
export default Description