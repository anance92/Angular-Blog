import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
    title:string = 'This is a sample title';
    body:string = `
    This is a sample post body
    This is a sample post body
    This is a sample post body
    This is a sample post body
    This is a sample post body`;
    show:boolean = true;
    size:number = 34;

    // constructor(title:string){

    // }

    togglePost() {
        console.log("Toggle button is working!");
        this.show = !this.show;
    }

    ngOnInit(): void {}
    
}