import React, { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";

const lectures = [
  {
    id: 1,
    title: "Build strong foundation of Krishna Consciousness - Śrī Rāma Katha Part 06 of 06",
    date: "2024-04-15",
    location: "Vrindavan",
    tags: ["Bhakti", "Devotion"],
    soundcloudUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1251177310",
    transcript: "(0:00) Salaam Paupas Ki Jaa (0:02) Shri Shri Sitaram Vatsanam Aromam Ki Jaa (0:07) Ram Chandra Bhagwan Ki Jaa (0:10) Hare Krishna (0:11) Hare Krishna (0:13) To continue our reading from Tamayana (0:19) Yesterday Bharat came back to Ayodhya (0:24) found his father was dead and his second father, his brother, Narva Chanda, (0:37) banished to the forest. Lakshman and Sita Devi accompanied him and everything was (0:46) arranged by his mother and as Bharat was surprised to see the action of his (0:54) mother, wondering what has changed her so drastically. (1:00) Sakhi was also surprised why her son did not accept what she has done. It is for (1:07) his own good. Bharat said, you have cut my body into pieces and I'm pouring (1:14) pepper inside. Accepting the throne will mean that the arrangement is done by me. (1:21) I just use you to make the arrangement so I can take the place. I will never do that. (1:26) You cannot cut down a tree and water the leaves and expect it to be nourished. (1:34) In other words, you cannot kill my father and send my brother who is also a father (1:40) to me to the forest and expect me to have an enjoyable life. It doesn't exist. (1:47) I cannot accept what they have arranged. It is evil. According to the culture and (1:55) the tradition, our own family tradition, our own family tradition, a system (2:02) followed from time is that the seniormost child is their successor and Ram (2:10) stands that charge naturally. Apart from that, Ram has won the heart of everyone. (2:17) So in all circumstances, Ram is a king. Sending him to the forest, it is 100% (2:25) irreligious and the consequences is heavy. I cannot bear that. Therefore, I will make (2:34) everything possible. I don't care what it will take me to make Ramchandra happy, to (2:44) take back the kingdom. So that is where we stop this. Now we continue from there. (2:53) What kind of a mother are you? To secure a kingdom for your son, you have heaped insecurity (3:04) on the life of your son. The heart of one mother should know how the heart of another beats. (3:20) When a person is a human being, there are certain qualities that we should possess. (3:30) Just to be a human being, there are qualities that we should have. And without these qualities, (3:36) one cannot begin any auspiciousness. Without human qualities, we can't talk about (3:42) Krishna Consciousness. To talk about Krishna Consciousness, we have to become human beings. (3:47) And to make us human beings, we have to follow four regulative principles. These four (3:54) regulative principles is to make us human beings. So we can do the duty for human beings, (4:02) practicing Krishna Consciousness. That is the duty for human beings. (4:04) So, Dr. Adi said, I have experience of one bereft of her children. How painful it is. (4:17) I don't want to make Dr. Acharya's wife have the same feeling, the same pain which I want (4:25) to go through. I don't want to do that to somebody who is a human being. A feeling that (4:33) one gets where one is pinched. Don't do it to somebody else. It's a human being. (4:43) I should not do what is wrong to other people. Because if they don't to me, I don't like it. (4:49) So why should I do that to other people? It's a human being. One who is not a human animal (4:55) will not consider that. Human animal. Whatever makes you feel good, do it. Right? (5:04) Whatever makes you feel good, just do it. If you're happy shooting someone in the gut (5:09) because you don't like the person, do it. Because that's what makes you happy. (5:13) And there's a country that this is normal. Right? In America there is the nigger hunting. (5:20) Do you understand nigger hunting? Nigger hunting means just go any black man you see, (5:27) kill him. Just because he's black, that's all. That's a fox. Right? (5:34) Because that makes you feel good. So do it. That's all. Anything that makes you feel good, do it. (5:41) Is that human? Dropard said, I know the pain one has for losing one's children. (5:52) Therefore, I wouldn't like to give it to another person. Don't kill a Sotama. (5:57) They cannot suffer like me, seemingly. So Barad said here, (6:06) The heart of one mother should know how the heart of another beats. (6:12) Even animals know this. Even animals know this. (6:20) Vassista's Kamadenu cow once observed a farmer torturing two young oxen from morning to noon. (6:33) Vassista Muni's Kamadenu cow once observed a farmer torturing two oxen from morning to noon. (6:50) By making them toil in the heat, when the oxen fell in sheer exhaustion, (6:59) hot tears rolled out of the cow's eyes. Those were not her own cows, but she experienced the pain of a mother. (7:11) It's a cow. The cows were not her own. For seeing how the cows of other cows were being treated, (7:22) working from morning to noon with heavy beating. This is what we see people doing like this here in the Nauru. (7:31) Beating. Once I asked my friend, but why so much beating? (7:36) He said, they are animals. That's the answer he gave me. (7:40) They are already carrying so much load. Why so much beating? (7:44) They are animals. I said, Devotee, who gave you the answer? (7:48) He said, I saw how they were beating. I felt very bad. (7:53) So I asked him, Prabhupada, why are you beating the cows so much like this? (7:58) They are carrying you, they are carrying your load, and we are beating the animals. (8:06) But here, the animals themselves are feeling pain seeing other animals being treated. (8:15) How can you be happy seeing another mother's child going through pain? (8:21) And how can you be happy making another mother cry? (8:24) I will not allow mother cows earlier to cry. (8:28) I will replace them in the forest and cast you into the ocean of tears. (8:34) This is balance. This is how a devotee should be here. (8:38) Taking the pains of others, positive thoughts. (8:44) Let the whole world go back home, back to Godhead. (8:49) Give me their hand. (8:52) The result of their sinful activities, give them to me. (8:55) My special master also prayed the same way. (8:58) Let me take the pain of the devotee's suffering. (9:03) The last thing he told me was the last telephone conversation I had with him. (9:09) So many devotees are locked up in karma. I want to lock it. (9:14) When he said that, for me, I felt, okay, it's okay. (9:21) I want to take that. (9:23) But how are you going to do that? (9:24) It's to leave the body, to give up the body. (9:29) And he wrote a letter in Argentinian. (9:32) Because in Argentinian, he wrote a letter, (9:34) an offer, it's a prophecy for you. (9:39) And just a week after the letter, he got the sickness. (9:42) A week after that, he got the sickness. (9:47) So we are telling you, write a letter. (9:51) Write a letter. Write a letter to Lama Chandra. (9:55) What you are writing, you should be conscious of it. (9:58) You should be conscious of what you are writing. (10:00) To drive sins into his mother, (10:05) Bara lost all bearings. (10:07) He rolled on the ground in pain, (10:10) like an elephant pierced by a javelin (10:13) and simultaneously dug by a spore, (10:18) flung herself onto the ground in anxiety (10:21) in exactly the same way. (10:25) And her ornaments were scattered in the same fashion. (10:29) Her acts had caused much pain to Dasarath. (10:34) And her son's display of grief was causing her the same pain. (10:38) She could clearly see how her unpassed actions (10:43) had been responsible for her present misery. (10:48) Kakei broke down for the first time in so many days (10:52) and wept piteously. (10:55) Bara's agony and Kakei's sobbing (10:58) attracted the attention of all the housekeepers. (11:02) They rushed to inform the ministers about the chaos, (11:06) proof of innocence. (11:07) As Bara screamed innocence (11:10) and begged forgiveness from the prominent people of Ayodhya, (11:16) he could see in their midst a shattered Satrugna. (11:21) Satrugna had heard about it and, (11:25) oh, I was completely distraught. (11:29) The crying brothers embraced each other, (11:31) unable to fathom how to undo what was done. (11:38) Satrugna suggested that they first take Kausalya into confidence, (11:44) pacify her, and assure her of their innocence. (11:49) Soon they were in front of the weeping Kausalya. (11:53) They ran and embraced her. (11:57) Their tears merging into rivers of sorrow. (12:00) The sight of the three crying left every helper present in the room teary-eyed. (12:10) Suddenly, Kausalya shrugged the two off and stood aside. (12:17) Her tears disappeared and her face turned fierce and strict. (12:23) It is time for you to rejoice. (12:26) Your ruthless mother has done what no other mother has ever done. (12:33) I am sure that you were well informed of the plan, (12:37) and I wouldn't be surprised if you were part of the plan too. (12:42) It's another pain. (12:43) My only question is why did you not send me to the forest with my son? (12:49) Did you want me to house arrested in Ayodhya to ensure that my son does not attack the kingdom? (13:02) I can assure you that I will pose no hindrance for you to rule happily. (13:09) Even if Rama were here, he would have proved no hindrance either. (13:16) O King, I request you to at least arrange for me to be sent to my son in the forest. (13:23) I will be happy to leave this insubstantial city and carry with me the body of your father and the sacrificial fire in the house. (13:38) Do you have at least this much compassion left to fulfill this desire of mine? (13:43) His stepmother's words pierced him like sharp needles thrust into the gruesome wound created by his mother. (13:55) He wailed and fell at her feet, wetting them with his tears. (14:01) He begged her not to doubt his integrity, to pull all fears to rest. (14:06) He took a series of vows in the form of negative affirmations. (14:15) These negative affirmations were a series of deviations, which, if performed, would result in severe reactions to the performer. (14:25) By making these affirmations, Bharat was convincing her that he was ready to face the consequences of these sins, (14:35) if he was in any way responsible for the four sins of irresponsibility. (14:46) Essentially, Bharat spoke of four categories of sins of irresponsibility. (14:53) Sins of irresponsibility that an accountable leader has to face, a dynamic follower has to face, a social pillar has to face, and a judicious householder has to face. (15:10) According to Bharat, if any of these sins were performed, it was disastrous for that rule. (15:18) Sins of irresponsibility for an accountable leader at various levels are collecting taxes without ensuring protection, which every leader today is doing throughout the whole world. (15:35) Sins of irresponsibility for an accountable leader at various levels are collecting taxes without ensuring protection, breaking the traditional code of warfare, (15:49) fleeing from a full-fledged battle, attempting treason against a loving fatherly king, imposing heavy labels on an employee without sufficient remuneration. (16:08) Who is doing this? Today we want a Raja, a Ram Raja. (16:12) Where is a single person that is doing this today? Around the world. (16:17) People are simply collecting taxes from people and using it to gratify their senses and not taking care of the citizens. (16:28) If in our movement we are using devotees without caring for devotees, it's the same thing. (16:35) Engaging devotees in services without caring for devotees, without caring if the devotees are properly dressed, if they are eating properly, if the devotees are in good health. (16:52) If we don't take care of these things, simply engaging devotees in service and service and service without considering their welfare, it is considered here the sin of irresponsibility. (17:01) We are irresponsible and it is sinful. (17:06) Running away from battlefields, irresponsibility, imposing heavy labels on an employee without sufficient remuneration. (17:17) This is going on everywhere. (17:21) Using workers, using workers, draining all the workers, squeezing all of them and pay them nothing. (17:31) That you see everywhere. Pay them nothing. (17:35) Heavy, heavy factory work, heavy machinery, people are working day from morning to night. (17:39) Heavy iron on their head from morning to night. How much is their salary? (17:44) This irresponsible act is sinful. (17:47) Breaking the traditional code of warfare. (17:51) Sin of irresponsibility for a dynamic follower. (17:56) Going back on the promised remuneration to a priest. (18:02) Promise a priest and not fulfilling that. (18:06) Sinful. (18:07) Eating food without offering it first to God. (18:15) Disrespecting teachers. (18:16) Sleeping during both twilight and mechanical study of scriptures. (18:24) Overlooking the subtle message taught by the spiritual master. (18:30) Sins of irresponsibility for a social pillar are falsifying the hopes of destitute beggars. (18:38) Setting fire to another's house. (18:41) Polluting drinking water. (18:44) Poisoning another's food. (18:47) Disappointing a thirsty person in spite of having sufficient water. (18:52) Kicking a sleeping cow and distributing gifts to the undeserving. (18:58) Poisoning drinking water. (19:00) Poisoning another's food. (19:03) Disappointing a thirsty person in spite of having sufficient water. (19:07) Kicking a sleeping cow and distributing gifts to the undeserving. (19:12) Sins of irresponsibility for a judicious householder are courting another's wife while disdaining his own. (19:24) Neglecting the request of a chaste wife to have a child. (19:30) Deceiving a friend. (19:32) Avoiding gratefully serving parents and abusing them. (19:37) Letting out a secret, shared confidentially by others. (19:44) Eating delicious foodstuffs, waters, sharing while being surrounded by family and servants. (19:53) Abandoning his despondence and maintaining dependence through a sinful occupation. (20:01) Barat's vows pacify Kausalia. (20:04) She realized that he was as innocent as a calf. (20:10) She walked up to him, cooked his hand, his mouth, and stopped him from taking more such vows. (20:21) She used her hand to cook his mouth like this. (20:26) Don't take more vows. This is sufficient. (20:29) She could see that he is innocent. (20:32) He was completely not part of the plan of his mother. (20:39) That was very clear. (20:41) She so appreciated Barat's loyalty towards Ram that she said, (20:47) The moon may emit poison through its rays. (20:52) The snow may emit fire. (20:54) Aquatics may give up their watery abodes. (20:59) And spiritual practices may stop eradicating errors. (21:03) But Barat will never turn hostile towards his brother. (21:09) Lord Barat Kijan. (21:12) For the first time in the day, Barat smiled weakly. (21:18) Kausalia embraced him. (21:21) And Barat slept on Kausalia's floor in lamentation. (21:25) Although lamenting, he was at least happy that he was able to convince one person in the kingdom of his uprightness. (21:39) Six Solutions to Success (21:43) This chapter offers six solutions to overcome obstacles hindering your ambitions and goals in life. (21:52) Each of these solutions is preceded by a test which questions and challenges your aspiration to achieve the goal. (22:07) This chapter offers six solutions to overcome obstacles hindering your ambitions and goals in life. (22:18) Each of these solutions is preceded by a test which questions and challenges your aspiration to achieve the goal. (22:30) Nothing comes easily. (22:32) Nothing. (22:34) Anything which is easy is not good. (22:37) Right? (22:38) Anything which is cheap is not good. (22:41) Right? (22:42) With every test, Barat proves that his goals are carved in stone and not on shifting sands. (23:00) Understand? (23:02) We mentioned that the foundation of our Christian consciousness should be stone. (23:09) That is on stone. (23:12) On sand is weak. (23:15) If your house is, in the Bible it says, build your house on the rock. (23:20) Build your house on the rock. (23:23) Means the foundation should be strong. (23:26) If the foundation is strong, earthquake will not do anything to the building. (23:32) Tornadoes will not have anything to do with the building. (23:35) It will remain strong. (23:36) Whatever happens, it will remain strong. (23:37) If the house is on the sand, a little breeze, it is flat on the ground. (23:45) So, it is said here that Barat proved that his foundation is on the stone, not on the shifting sands. (23:57) Sometimes at the bank of the river you have quicksand. (24:01) Quicksand. (24:02) Under it is water. (24:03) When the surface looks like soil, but under it is water. (24:08) So, one who mistakenly stands on the quicksand will soon be swept away. (24:16) Because they are going to sink. (24:18) So, Barat's foundation is on the stone, not on the sand. (24:25) Are we ready to build our foundation on the rock or sand? (24:29) Rock. (24:31) So, that is easy. (24:33) That is for lazy man. (24:35) That is not for lazy people. (24:38) Christian consciousness is not for lazy people. (24:41) Christian consciousness is for people who are determined. (24:44) So, this is the process. (24:46) This is Bodhi Yoga. (24:48) This is Bodhi Yoga. (24:51) The Yoga of Intelligence. (24:52) The Yoga of Knowledge. (24:54) We are not talking about Jnanis. (24:56) We are not talking about Jnanis. (24:59) Mission text number one. (25:02) Confronting Criticism. (25:04) Confronting Criticism. (25:08) When Barat had a counselor criticizing him and doubting his mission, (25:14) he asked himself three questions that teach us how to face criticism rightly. (25:22) What are the questions? (25:23) Why is she criticizing? (25:26) Is she criticizing for personal profit or from personal pain? (25:33) Where is our complaint coming from? (25:36) Are we complaining based on personal profit or pain? (25:43) We do this every day, right? (25:45) Where is it coming from? (25:47) Is the criticism from a personality I respect? (25:52) Is the criticism from a personality I respect? (25:58) And the last one. (25:59) Is criticism a habit? (26:03) Habit. (26:04) Is it what this person does regularly? (26:08) Is this person always criticizing? (26:11) Why is this happening now? (26:13) First of all, is it personal gain? (26:18) Is it for personal respect? (26:20) Is it from a person that I respect? (26:23) Is this person I respect this person? (26:27) Or just a person I don't respect? (26:29) And is criticism the habit of this person? (26:34) Is it this person's nature? (26:37) This is how intelligent people look at things. (26:39) Someone gets angry with us. (26:42) The spiritual master gets angry with us. (26:44) Is it anger due to the moods? (26:47) Is it for our own benefit? (26:51) Is it for false ego? (26:54) This is how Barat is looking at every situation. (26:59) This is knowledge. (27:00) This is wisdom. (27:03) When he asked himself these questions, (27:06) Barat realized that she was hurt and feeling helpless. (27:12) And that although the spotless counselor never criticized anyone, (27:19) altering these words, (27:21) where is her way of dealing with this trauma? (27:28) She is not a criticizer. (27:31) Not a person who criticizes. (27:33) It is not personal. (27:35) It is due to the present situation. (27:37) Barat dealt with criticism by taking a series of affirmations. (27:43) Barat, taking these affirmations, (27:46) did not solve Kausalia's problem, (27:48) but gave her a strong demonstration of his sincerity. (27:55) The seriousness and implications of the affirmations (27:58) were so strong (28:01) that Kausalia immediately accepted the gravity of his mission (28:05) and developed faith in the possibility of his accomplishing it. (28:13) As for Barat, (28:15) taking such affirmations still his resolve. (28:27) Lamentation that causes prolonged inaction (28:30) is actually irresponsibility at an individual level (28:37) and leads to chaos at a collective level. (28:46) Lamentation that causes prolonged inaction (28:50) is actually irresponsibility at an individual level (28:58) and leads to chaos at a collective level. (29:03) Every individual constantly carries three coins in his pocket. (29:09) Each coin has two sides (29:12) and the side that is up front (29:15) indicates the dominant quality in his life at that moment. (29:22) Don't lament for that which is unavoidable. (29:27) Don't lament for that which is unavoidable. (29:33) Each coin has two sides (29:38) and the side that is up front (29:42) indicates the dominant quality in his life at that moment. (29:49) The coin of hankering has hunger and thirst at each side. (29:54) The coin of hankering has hunger and thirst at each side."
  },
  {
    id: 2,
    title: "Importance of Varnasrama Dharma in Governance - Śrī Rāma Katha Part 05 of 06",
    date: "2024-04-15",
    location: "Vrindavan",
    tags: ["Bhakti", "Devotion"],
    soundcloudUrl:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1251176656",
    transcript: "(0:00) Salaam Paupas Ki Jaa (0:02) Shri Shri Sitaram Vatsanam Aromam Ki Jaa (0:07) Ram Chandra Bhagwan Ki Jaa (0:10) Hare Krishna (0:11) Hare Krishna (0:13) To continue our reading from Tamayana (0:19) Yesterday Bharat came back to Ayodhya (0:24) found his father was dead and his second father, his brother, Narva Chanda, (0:37) banished to the forest. Lakshman and Sita Devi accompanied him and everything was (0:46) arranged by his mother and as Bharat was surprised to see the action of his (0:54) mother, wondering what has changed her so drastically. (1:00) Sakhi was also surprised why her son did not accept what she has done. It is for (1:07) his own good. Bharat said, you have cut my body into pieces and I'm pouring (1:14) pepper inside. Accepting the throne will mean that the arrangement is done by me. (1:21) I just use you to make the arrangement so I can take the place. I will never do that. (1:26) You cannot cut down a tree and water the leaves and expect it to be nourished. (1:34) In other words, you cannot kill my father and send my brother who is also a father"
  },
  {
    id: 3,
    title: "The Exile of Lord Ramchandra - Śrī Rāma Katha Part 04 of 06",
    date: "2024-04-15",
    location: "Vrindavan",
    tags: ["Bhakti", "Devotion"],
    soundcloudUrl:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1251176656",
    transcript: "(0:00) Salaam Paupas Ki Jaa (0:02) Shri Shri Sitaram Vatsanam Aromam Ki Jaa (0:07) Ram Chandra Bhagwan Ki Jaa (0:10) Hare Krishna (0:11) Hare Krishna (0:13) To continue our reading from Tamayana (0:19) Yesterday Bharat came back to Ayodhya (0:24) found his father was dead and his second father, his brother, Narva Chanda, (0:37) banished to the forest. Lakshman and Sita Devi accompanied him and everything was (0:46) arranged by his mother and as Bharat was surprised to see the action of his (0:54) mother, wondering what has changed her so drastically. (1:00) Sakhi was also surprised why her son did not accept what she has done. It is for (1:07) his own good. Bharat said, you have cut my body into pieces and I'm pouring (1:14) pepper inside. Accepting the throne will mean that the arrangement is done by me. (1:21) I just use you to make the arrangement so I can take the place. I will never do that. (1:26) You cannot cut down a tree and water the leaves and expect it to be nourished. (1:34) In other words, you cannot kill my father and send my brother who is also a father"
  },

  
];

export default function LectureDetail() {
  const { id } = useParams();
  const lecture = lectures.find((l) => l.id === parseInt(id));
  const playerRef = useRef(null);
  const widgetRef = useRef(null);
  const lineRefs = useRef([]);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (playerRef.current && window.SC) {
      widgetRef.current = window.SC.Widget(playerRef.current);
      widgetRef.current.bind(window.SC.Widget.Events.PLAY_PROGRESS, (e) => {
        const seconds = e.currentPosition / 1000;
        setCurrentTime(seconds);
      });
    }
  }, []);

  const transcriptLines = lecture ? parseTranscript(lecture.transcript) : [];

  useEffect(() => {
    const index = transcriptLines.findIndex((line, i) => {
      const next = transcriptLines[i + 1];
      return (
        currentTime >= line.time &&
        (next ? currentTime < next.time : true)
      );
    });

    if (index !== -1 && lineRefs.current[index]) {
      lineRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [currentTime, transcriptLines]);

  const handleLineClick = (time) => {
    if (widgetRef.current) {
      widgetRef.current.seekTo(time * 1000); // Convert seconds to ms
    }
  };

  if (!lecture) {
    return <div className="p-6 text-red-500">Lecture not found.</div>;
  }

  return (
    <div className="min-h-screen bg-saffron-50 text-gray-800 p-6 font-serif">
      <Link to="/" className="text-saffron-700 hover:underline mb-4 block">
        ← Back to library
      </Link>

      <h1 className="text-2xl md:text-4xl font-bold mb-4">{lecture.title}</h1>
      <p className="text-saffron-600 text-sm mb-6">
        {lecture.date} – {lecture.location}
      </p>

      <div className="aspect-auto mb-8">
        <iframe
          ref={playerRef}
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={lecture.soundcloudUrl}
        ></iframe>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-4 text-saffron-700">
          Transcript
        </h2>
        <div className="space-y-2 max-h-[400px] overflow-y-auto">
          {transcriptLines.map((line, index) => {
            const isActive =
              currentTime >= line.time &&
              (transcriptLines[index + 1]
                ? currentTime < transcriptLines[index + 1].time
                : true);

            return (
              <p
                key={index}
                ref={(el) => (lineRefs.current[index] = el)}
                onClick={() => handleLineClick(line.time)}
                className={`text-sm cursor-pointer transition-all ${
                  isActive
                    ? "bg-saffron-100 text-saffron-700 p-1 rounded"
                    : "text-gray-700 hover:bg-saffron-50"
                }`}
              >
                {line.text}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function parseTranscript(transcriptString) {
  const regex = /\((\d+):(\d+)\)\s*((?:.|\n)*?)(?=(\(\d+:\d+\))|$)/g;
  const lines = [];
  let match;

  while ((match = regex.exec(transcriptString)) !== null) {
    const minutes = parseInt(match[1]);
    const seconds = parseInt(match[2]);
    const time = minutes * 60 + seconds;
    const text = match[3].trim().replace(/\n+/g, " ");
    lines.push({ time, text });
  }

  return lines;
}
