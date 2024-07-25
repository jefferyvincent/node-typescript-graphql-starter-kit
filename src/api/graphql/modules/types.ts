import { Types } from 'mongoose'

export type ContextType = {
    me: {
        id: string
    }
}

export type ID = {
    id: string | Types.ObjectId
}
