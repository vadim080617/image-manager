import { openDB, IDBPDatabase } from 'idb';
import { TooltipedImage, TooltipedImageEntity } from '../interfaces';


export class ImageService {
    private db: IDBPDatabase | undefined;
    private dbName: string = 'imageApp';
    private imageStoreName: string = 'images';

    public async store(data: TooltipedImage<File>): Promise<TooltipedImageEntity> {
        const db = await this.initDb();
        const entityId = await db.add(this.imageStoreName, data);
        const dbEntity = await db.get(this.imageStoreName, entityId);

        return this.substituteImageWithUrl(dbEntity);
    }

    public async destroy(id: number): Promise<void> {
        const db = await this.initDb();

        return db.delete(this.imageStoreName, id);
    }

    public async show(id: number): Promise<TooltipedImageEntity> {
        const db = await this.initDb();
        const dbEntity = await db.get(this.imageStoreName, id);

        return this.substituteImageWithUrl(dbEntity);
    }

    public async index(): Promise<TooltipedImageEntity<string>[]> {
        const db = await this.initDb();
        const imageDbEntities = await db.getAll(this.imageStoreName);
        const imagesWithLink = imageDbEntities.map((imageDbEntity: TooltipedImageEntity<File>) => this.substituteImageWithUrl(imageDbEntity));

        return imagesWithLink;
    }

    public async update(data: TooltipedImageEntity<File>): Promise<TooltipedImageEntity<string>> {
        const db = await this.initDb();
        const oldDbEntity = await db.get(this.imageStoreName, data.id);
        if (!data.image) {
            data.image = oldDbEntity.image;
        }
        const updatedEntityId = await db.put(this.imageStoreName, data);
        const dbEntity = await db.get(this.imageStoreName, updatedEntityId);

        return this.substituteImageWithUrl(dbEntity);
    }

    public async initDb() {
        const imageStoreName = this.imageStoreName;

        if (this.db) return this.db;
        this.db = await openDB(this.dbName, 1, {
            upgrade(db) {
                if (!db.objectStoreNames.contains(imageStoreName)) {
                    db.createObjectStore(imageStoreName, { keyPath: 'id', autoIncrement: true });
                }
            }
        });

        return this.db;
    }

    private getImageUrl(image: File): string {
        const binaryData = [];
        let imageUrl = '';
        binaryData.push(image);
        if (image) {
            imageUrl = window.URL.createObjectURL(new Blob(binaryData, { type: image.type }))
        }

        return imageUrl;
    }

    private substituteImageWithUrl(entity: TooltipedImageEntity<File>): TooltipedImageEntity<string> {
        const imageUrl = this.getImageUrl(entity.image);

        return {
            ...entity,
            image: imageUrl,
        }
    }
}