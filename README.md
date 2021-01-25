# Instagram Backup Manager / Instagram Backup Data Viewer
 A Simple web application makes your Instagram Account Backup Data readable to a great extent .  

## Pre-Requisite
You must have internet connection (to install dependencies and load CSS Elements) and You Must have node.js , git installed on your pc , 
I have provided links and methods for those below.

## How to Setup

### Windows Users
[Download Node.js](https://nodejs.org/en/download/) ,
[Download Git for Windows](https://git-scm.com/download/win)

### Linux Users 
`sudo apt-get upgrade && sudo apt-get install nodejs git`

### MacOS 
[Download Node.js](https://nodejs.org/en/download/)
**git is pre-installed on macOS but if not then run `git --version` then i'll prompt you to install**


## Setup 
**[*]** It's Pretty Easy just clone the code by opening terminal/cmd and type:

 `git clone https://github.com/mainigautam/instagram_backup_manager.git -b igbm-1.0 igbm`

**[*]** this will create a folder named **"igbm"** with all the code 

**[*]** After that go back to igbm directory and double click **setup.bat** to install all the dependencies.

**[*]** After Setup is Done double click On **run.bat**.

 This will open the browser window automatically. Then click on choose file and select your Instagram Backup's Zip File.
 
 ## Features
- [X] Display Profile Data With Images
- [X] Stories Archive (Pics and Videos)
- [X] Direct Messages With Likes ,TimeStamps , Reactions and Media Exchanged
- [X] Group Chats 
- [X] Followers and Following Number and List .
- [X] Can Load On Your Mobile Via React's Local IP server in full mobile view 
- [X] Just Upload Backup Zip and Explore you backup data

## Todo:
- [ ] Adapt New and Old Both Backup Formats
- [ ] More Reduction in Size and Install Time
- [ ] Convert to native app 

## Known Bugs
- Backups Dated In Year 2021 are not working as Instagram Made Changes in Backup Format (Will Be Fixed Soon)
- ~~The Data with 0 following, followers or posts isn't loading~~
- Timeline Feature Dosen't works for now
- Zoomed Post Pics are not supported in mobile view for now 
- Group Participant names are not shown in header of Group's DM
- Shows Empty Bubble for posts those were from external pages/friend's profile
- Tell More If You Find 

## Note
> **All The Code and Assests of This project are created by me only not copy pasted or pirated**

> **Instagram Has put many limitations in the backup version of your accounts it dosen't provide the likes and comments information
so i cannot do anything about the stuff instagram itself dosen't provide** 

>  **Feel Free To Give Pull Requests and Comment Feature Requests.**
 
 ### Thanks To Makers Of
 Node.js React.js Concurrently Nodemon Express.js Del Multer Facebook(LLC)
 
