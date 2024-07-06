import CloseIcon from '@mui/icons-material/Close'
import { AppBar, Button, Dialog, IconButton, Slide, Toolbar, Typography } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import React, { useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useAppDispatch } from '../../../app/store'
import { addPostAC } from '../../../features/posts/model/postReducer'
import style from './popup.module.scss'

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />
})

type Props = {
    text: string
}

export default function FullScreenDialog({ text }: Props) {
    const dispatch = useAppDispatch()

    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [category, setCategory] = useState('')
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [selectedFileBase64, setSelectedFileBase64] = useState<string | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null
        setSelectedFile(file)

        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setSelectedFileBase64(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.currentTarget.value)
    }

    const handleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCategory(e.currentTarget.value)
    }

    const removeFile = () => {
        setSelectedFile(null)
        setSelectedFileBase64(null)
        if (fileInputRef.current) fileInputRef.current.value = ''
    }

    const handleClickOpen = () => {
        setOpen(true)
    }

    const clearTheForm = () => {
        setOpen(false)
        setTitle('')
        setContent('')
        setCategory('')
        setSelectedFile(null)
        setSelectedFileBase64(null)
    }

    const handleClose = () => {
        const post = {
            id: uuidv4(),
            title: title,
            category: category,
            date: '28 JUN',
            content: content,
            img: selectedFileBase64 || '',
        }

        if (post.title && post.category && post.date && post.content && post.img) {
            dispatch(addPostAC(post))
            clearTheForm()
        } else {
            setOpen(false)
        }
    }

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                {text}
            </Button>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            {text}
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            save
                        </Button>
                    </Toolbar>
                </AppBar>
                <form className={style.popup_form}>
                    <h4>Title</h4>
                    <input type="text" onChange={handleTitle} />

                    <h4>Content</h4>
                    <textarea rows={10} onChange={handleContent}></textarea>

                    <div className="row">
                        <div className="col-lg-4">
                            <h4>Select Categories</h4>
                            <input type="text" onChange={handleCategory} />
                        </div>
                        <div className="col-lg-4">
                            <h4>Post Image</h4>
                            <input type="file" accept="image/*" onChange={handleFileChange} ref={fileInputRef} />

                            {selectedFileBase64 && (
                                <div className={style.selected_image}>
                                    <button onClick={removeFile}>X</button>
                                    <p>File name: {selectedFile?.name}</p>
                                    <img
                                        src={selectedFileBase64}
                                        alt="Selected"
                                        style={{ width: '100px', height: 'auto' }}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </form>
            </Dialog>
        </React.Fragment>
    )
}
