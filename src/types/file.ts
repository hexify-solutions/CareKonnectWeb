export interface FileType {
  id: string
  userId: string
  fileName: string
  fileNumber: string
  fileUrl: string
  fileSize: number
  fileType?: string
  mimeType?: string
  description?: string | null
  status: 'active' | 'archived' | 'deleted'
  createdAt: DateTime
  updatedAt: DateTime
  deletedAt: DateTime
}