import React from 'react';
import './styles.scss'
import { GroupData } from '../GroupData/CompGroupData';
import { GroupSectionInfo } from '../GroupData/CompInfoSection';


const GeneralDetails = (props) => {

    return(
        <div className='info-contianer'>
            <GroupSectionInfo 
                sectionName='Personal Information'
                showBottomBorder={true}
                elements={
                    <>
                        <GroupData label='FULL NAME' value="Grace Effiom" />
                        <GroupData label='PHONE NUMBER' value="07060780922" />
                        <GroupData label='EMAIL ADDRESS' value="grace@gmail.com" />
                        <GroupData label='BVN' value="07060780922" />
                        <GroupData label='GENDER' value="Female" />
                        <GroupData label='MARITAL STATUS' value="Single" />
                        <GroupData label='CHILDREN' value="None" />
                        <GroupData label='TYPE OF RESIDENCE' value="Parent's Appartment" />
                    </>
                }
            />
            <GroupSectionInfo 
                sectionName='Education and Employment'
                showBottomBorder={true}
                elements={
                    <>
                        <GroupData label='LEVEL OF EDUCATION' value="B.Sc" />
                        <GroupData label='EMPLOYMENT STATUS' value="Employed" />
                        <GroupData label='SECTOR OF EMPLOYMENT ' value="FinTech" />
                        <GroupData label='DURATION OF EMPLOYMENT' value="2 Years" />
                        <GroupData label='OFFICE EMAIL' value="grace@lendsqr.com" />
                        <GroupData label='MONTHLY INCOME' value="200,000.00 - 400,000.00" />
                        <GroupData label='LOAN REPAYMENT' value="40,000" />
                    </>
                }
            />
            <GroupSectionInfo 
                sectionName='Socials'
                showBottomBorder={true}
                elements={
                    <>
                        <GroupData label='TWITTER' value="@grace_effiom" />
                        <GroupData label='FACEBOOK' value="Grace Effiom" />
                        <GroupData label='INSTAGRAM' value="@grace_effiom" />
                    </>
                }
            />
            <GroupSectionInfo 
                sectionName='Guarantor'
                showBottomBorder={true}
                elements={
                    <>
                        <GroupData label='FULL NAME' value="Debby Ogana" />
                        <GroupData label='PHONE NUMBER' value="07060780922" />
                        <GroupData label='EMAIL ADDRESS' value="debby@gmail.com" />
                        <GroupData label='RELATIONSHIP' value="Sister" />
                    </>
                }
            />
            <GroupSectionInfo 
                // sectionName=''
                elements={
                    <>
                        <GroupData label='FULL NAME' value="Debby Ogana" />
                        <GroupData label='PHONE NUMBER' value="07060780922" />
                        <GroupData label='EMAIL ADDRESS' value="debby@gmail.com" />
                        <GroupData label='RELATIONSHIP' value="Sister" />
                    </>
                }
            />
        </div>
    )
}

export default GeneralDetails