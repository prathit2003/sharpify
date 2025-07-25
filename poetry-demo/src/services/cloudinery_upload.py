import boto3
import uuid
from botocore.exceptions import BotoCoreError, NoCredentialsError
from fastapi import HTTPException

AWS_BUCKET_NAME = "your-bucket-name"
AWS_REGION = "your-region"
FOLDER = "enhanced-images"

s3_client = boto3.client("s3", region_name=AWS_REGION)

async def upload_to_s3(file_bytes: bytes, format: str) -> str:
    try:
        ext = format.lower()
        unique_filename = f"{FOLDER}/{uuid.uuid4()}.{ext}"

        content_types = {
            "jpg": "image/jpeg",
            "jpeg": "image/jpeg",
            "png": "image/png",
            "webp": "image/webp"
        }
        content_type = content_types.get(ext, "application/octet-stream")

        s3_client.put_object(
            Bucket=AWS_BUCKET_NAME,
            Key=unique_filename,
            Body=file_bytes,
            ContentType=content_type,
            ACL="public-read"
        )

        url = f"https://{AWS_BUCKET_NAME}.s3.{AWS_REGION}.amazonaws.com/{unique_filename}"
        return url

    except (BotoCoreError, NoCredentialsError) as e:
        raise HTTPException(status_code=500, detail=f"S3 upload failed: {str(e)}")
