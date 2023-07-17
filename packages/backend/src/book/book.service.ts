import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema';
import { Model } from 'mongoose';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name) private bookModel: Model<Book>
  ) {}

  async findOne(id: string): Promise<Book> {
    const book =  await this.bookModel.findById(id);

    if (!book) {
      throw new NotFoundException('book does not exist');
    }

    return book;
  }

  async findAll(): Promise<Book[]> {
    return await this.bookModel.find();
  }

  async create(book: Book): Promise<Book> {
    return await this.bookModel.create(book);
  }

  async findByIdAndUpdate(id: string, book: Book): Promise<Book> {
    return await this.bookModel.findByIdAndUpdate(id, book, {
      new: true,
      runValidators: true
    });
  }

  async findByIdAndDelete(id: string): Promise<Book> {
    return await this.bookModel.findByIdAndDelete(id);
  }
}
