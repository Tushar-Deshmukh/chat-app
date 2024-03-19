import React from 'react'
import "./styles.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';

import { IconButton } from '@mui/material';
import ConversationsItem from './ConversationsItem';

export default function Sidebar() {
    return (
        <div className='side-bar-container'>
            <div className='sb-header'>
                <div>
                    <IconButton>
                        <AccountCircleIcon />
                    </IconButton>
                </div>

                <div>
                    <IconButton>
                        <PersonAddIcon />
                    </IconButton>

                    <IconButton>
                        <GroupAddIcon />
                    </IconButton>

                    <IconButton>
                        <AddCircleIcon />
                    </IconButton>

                    <IconButton>
                        <NightlightIcon />
                    </IconButton>
                </div>
            </div>

            <div className='sb-search'>
                <IconButton>
                    <SearchIcon />
                </IconButton>

                <input placeholder='Search' className='search-box' />
            </div>

            <div className='sb-conversation'>
                conversation
                <ConversationsItem />
            </div>
        </div>
    )
}
