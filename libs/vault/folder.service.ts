import { BehaviorSubject, Observable } from "rxjs";

export class FolderService {
  private readonly folders = new BehaviorSubject<string[]>([]);

  folders$(): Observable<string[]> {
    return this.folders.asObservable();
  }
}
