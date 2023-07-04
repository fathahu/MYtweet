import { Box, Button, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
const AddPost = () => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        height: 300,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: 5

    };
    const [open, Setopen] = useState(false)

    return (
        <>
            <Tooltip title="Add Post" sx={{ position: 'fixed', bottom: 16, right: 16 }}>
                <Fab color="primary" aria-label="add" onClick={e => Setopen(true)}>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                onClose={e => Setopen(false)}

            >
                <Box sx={style} bgcolor={'background.default'} color={'text.primary'}>
                    <Typography variant="h4" fontWeight={500} color='gray' sx={{ marginTop: 2, marginBottom: 4 }} >
                        Add Post
                    </Typography>
                    <TextField
                        id="standard-multiline-static"
                        label="What's on your Mind ?"
                        multiline
                        rows={3}
                        // placeholder="What's on your Mind ?"
                        variant="standard"
                        sx={{ width: '100%' }}
                    />
                    <Stack direction='row' gap={1} marginTop={2} marginBottom={2} >
                        <EmojiEmotionsIcon color='warning' />
                        <ImageIcon color='primary' />
                        <VideoCameraBackIcon color='success' />
                        <AlternateEmailIcon color='error' />
                    </Stack>
                    <Box display='flex'
                        justifyContent='flex-end'
                        alignItems='flex-end'>
                        <Button variant="contained" sx={{ paddingX: 4 }} ><Typography variant='h6'>Add</Typography></Button>

                    </Box>
                </Box>
            </Modal>
        </>
    )
}

export default AddPost