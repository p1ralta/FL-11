import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }
  getBlogs() {
    return [
      {
        title:'Kane hat-trick keeps England perfect',
        time: '07/09/19 6:40pm',
        description: `Harry Kane scored a hat-trick as England maintained their perfect start
                       to Euro 2020 qualification with a 4-0 win over Bulgaria.`,
        fullDescription: `After a subdued first-half display, England hit full stride in the second period. 
                          Kane doubled his tally from the penalty spot within four minutes of the restart,
                          after Marcus Rashford was brought down in the box, and then returned the favour to Sterling, 
                          squaring the ball for the Manchester City forward to add England's third on 55 minutes.`
      },
      {
        title: 'Sanchez Flores replaces Gracia at Watford',
        time: '07/09/19 6:32pm',
        description: `Watford have appointed former boss Quique Sanchez Flores following the sacking
                      of head coach Javi Gracia just five matches into the season`,
        fullDescription: `The 54-year-old Spaniard returns to Vicarage Road after coaching the Hornets 
                          during the 2015/16 season, leading them to a 13th-placed finish and the FA Cup 
                          semi-finals before moving to Espanyol`
      },
      {
        title: 'L1: Wycombe go top to make history',
        time: '07/09/19 6:04pm',
        description: `Wycombe climbed to the top of the Sky Bet League One table with a 3-1 win over Lincoln.`,
        fullDescription: `Joe Jacobson scored a 20-yard free-kick within five minutes and his 36th-minute corner'
                          went in via Michael Bostwick on the line. Then, after John Akinde had pulled one back 
                          on 50 minutes,Jacobson did it again direct from a 75th-minute corner with Lincoln
                          keeper Josh Vicker well beaten.`
                           
      },
      {
        title: 'Nadal to face Medvedev in US Open final',
        time: '07/09/19 6:46am',
        description: `Rafael Nadal blew away Matteo Berrettini to reach the US Open final and brink 
                      of a 19th Grand Slam title.`,
        fullDescription: `The Spanish second seed, a three-time winner at Flushing Meadows, will face
                          Russian Daniil Medvedev on Sunday after a straight-sets win over Berrettini.
                          Nadal said: "First set was a little bit frustrating, I had a lot of break points
                          and you don't want to be in a tie-break with a player like Matteo. "Congrats to Matteo.
                          He's young, he has everything and he has a great future in front of him."`
      },
      {
        title: 'Serena vs Andreescu: A clash of generations',
        time: '07/09/19 10:00am',
        description: `Serena Williams will face Bianca Andreescu in the US Open final as her pursuit of a 
                      record-equalling 24th Grand Slam singles title presents a clash of generations.`,
        fullDescription: `The six-time American champion has powered through to a 33rd Grand Slam final and
                          more significantly her fourth since returning to tennis following the birth 
                          of her first child in September 2017.Williams has suffered disappointment in
                          her last three major showpieces, including last year's controversial defeat 
                          against Naomi Osaka in New York, but will be a heavy favourite against 19-year-old
                           Andreescu.`
      },
      {
        title: 'US Open 2019: Men\'s',
        time: '06/09/19 11:30pm',
        description: `The full draw for the 2019 Men's Singles tournament at the US Open, Flushing Meadows, 
                      New York, USA.`,
        fullDescription: `Just 12 months ago, Andreescu lost in the first round of qualifying at Flushing
                          Meadows and was ranked 208 in the world. Andreescu, still ranked a lowly 152 at
                          the start of the year, has now joined Pam Shriver and Venus Williams as the only 
                          women to make the final on their main draw debut`
      }
   ]
  }
}
