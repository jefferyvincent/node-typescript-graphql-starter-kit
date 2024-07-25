import mongoose, { Document, Model, Schema } from 'mongoose'

const TestSchema = new Schema(
    {
        field: String,
        updatedAt: { type: Date, default: new Date() },
        createdAt: { type: Date, default: new Date() },
    }
)

export interface ITest extends Document {
    field: string
    updatedAt: Date
    createdAt: Date
}

const TestModel: Model<ITest> = mongoose.models.test || mongoose.model<ITest>('test', TestSchema)

export default TestModel
