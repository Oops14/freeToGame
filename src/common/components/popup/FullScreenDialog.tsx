import CloseIcon from '@mui/icons-material/Close'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import IconButton from '@mui/material/IconButton'
import Slide from '@mui/material/Slide'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { TransitionProps } from '@mui/material/transitions'
import * as React from 'react'
import { useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useAppDispatch } from '../../../app/store.ts'
import { addPostAC } from '../../../features/posts/model/postReducer.ts'
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
    // Clear the file input completely.
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null
        setSelectedFile(file)
    }

    const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.currentTarget.value
        setTitle(text)
    }

    const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const content = e.currentTarget.value
        setContent(content)
    }

    const handleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
        const category = e.currentTarget.value
        setCategory(category)
    }

    const removeFile = () => {
        setSelectedFile(null)
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
    }

    const handleClose = () => {
        const post = {
            id: uuidv4(),
            title: title,
            category: category,
            date: '28 JUN',
            content: content,
            img: selectedFile?.name || '',
        }

        if (post.title && post.category && post.date && post.content && post.img) {
            dispatch(addPostAC(post))
            clearTheForm()
        } else {
            setOpen(false)
        }
    }

    // React.useEffect(() => {
    //     console.log(selectedFile)
    // }, [selectedFile])

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
                    <input
                        type="text"
                        onChange={(e) => {
                            handleTitle(e)
                        }}
                    />

                    <h4>Content</h4>
                    <textarea
                        rows={10}
                        onChange={(e) => {
                            handleContent(e)
                        }}></textarea>

                    <div className="row">
                        <div className="col-lg-4">
                            <h4>Select Categories</h4>
                            <input
                                type="text"
                                onChange={(e) => {
                                    handleCategory(e)
                                }}
                            />
                        </div>
                        <div className="col-lg-4">
                            <h4>Post Image</h4>
                            <input type="file" accept="image/*" onChange={handleFileChange} ref={fileInputRef} />

                            {selectedFile && (
                                <div className={style.selected_image}>
                                    <button onClick={removeFile}>X</button>
                                    <p>File name: {selectedFile.name}</p>
                                    {/* Display the selected image */}
                                    <img
                                        src={URL.createObjectURL(selectedFile)}
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
