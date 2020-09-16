# instagram_backup_manager
This Is A Simple React+Node App , Which Makes Your Instagram Backup Data Readable to A Very High Extent:

## Pre-Requisite
You Have To Install Node_modules in three directories , 
that is parent , server and client directory respectively,
for that you must have node.js and git installed on your pc , 
You have links and methods for those below.

## Requirements

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
`git clone https://github.com/mainigautam/instagram_backup_manager.git -b igbm-0.1 igbm`

**[*]** this will create a folder named **"igbm"** with all the code 

Now Take Your Instagram Backup and Extract all the files into **server/api/data directory** (directly without any nesting)

after that go back to igbm directory and open terminal in that folder by right clicking on **Linux/MacOS** and 
Command Prompt by pressing **Shift + Right Click** On **Windows** 

then type 

`npm install`

**[*]** after completion type 

 `cd server && npm install`
 
 **[*]** after that, setup the final client page dependencies by :
 
 `cd ../ && cd client && npm install`
 
 **[*]** After you are done installing the dependencies Close the terminal and open it again in igbm directory and type:
 
 `npm start`
 
 
 this will open the browser with your backup opened as instagram's format to the best format .
 
 Feel Free To Give Pull Requests and Comment Feature Requests . This is a initial push the automated and more cleaner version will be uploaded soon . For Now 
 it  Can 
 
 ## Features
- [X] Display Profile Data With Images
- [X] Stories Archive (Pics and Videos)
- [X] Direct Messages With Likes ,TimeStamps , Pics Sent (By You Only due to limitations)
- [X] Group Chats 
- [X] Followers and Following Number and List .
- [X] Can Load On Your Mobile Via React's Local IP server in full mobile view 

## Known Bugs
- Timeline Feature Dosen't works for now
- Zoomed Post Pics are not supported in mobile view for now 
- Group Participant names are not shown in header of Group's DM
- Tell More If You Find 

## Note
> **All The Code and Assests of This project are created by me only not copy pasted or pirated**

> **Instagram Has put many limitations in the backup version of your accounts it dosen't provide the likes, comments and the pictures sent by your friends 
 and i cannot do anything about the stuff instagram itself dosen't provide** 
 
 ### Thanks To Makers Of
 Node.js React.js Concurrently Nodemon Express.js Facebook(LLC)
 
