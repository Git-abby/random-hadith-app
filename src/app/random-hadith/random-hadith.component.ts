import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-random-hadith',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './random-hadith.component.html',
  styleUrl: './random-hadith.component.css'
})
export class RandomHadithComponent {
  randomHadith: any = null;

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.getAllHadithCollections()
  }

  getAllHadithCollections(){
    this.http.get('https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-abudawud.json').subscribe((res: any) => {
     
     const lengthOfHadiths = res.hadiths.length;
      const random = Math.floor(Math.random() * lengthOfHadiths)
      console.log(res.hadiths[random])
      this.randomHadith = res.hadiths[random];
    })
  }
}
