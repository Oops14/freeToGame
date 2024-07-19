import Alert, { AlertColor } from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Stack from '@mui/material/Stack'

type Props = {
    title: string
    typeAlert: AlertColor
    text: string
}

export default function DescriptionAlerts({ title, typeAlert, text }: Props) {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant="filled" severity={typeAlert}>
                <AlertTitle>{title}</AlertTitle>
                {text}
            </Alert>
        </Stack>
    )
}
