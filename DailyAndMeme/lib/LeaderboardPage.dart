import 'package:flutter/material.dart';

import 'Util.dart';

class LeaderboardPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return WillPopScope(
      // disable going back
      onWillPop: () => Future.value(false),
      child: Scaffold(
        bottomSheet: buildBottomSheet(context),
        body: Center(
          child: Container(
            padding: const EdgeInsets.all(32),
            child: _buildLeaderboardPage(context),
          ),
        ),
      ),
    );
  }

  Widget _buildLeaderboardPage(BuildContext context) {
    // TODO: sort persons by pick score; inplace sorting destroys indices -> need class :/
    //meetingPersons.sort(comparePersonsByPickAccuracy);

    // sorting too complicated for now; just add a crown
    List<bool> winners = List.generate(meetingPersons.length, (index) => false);
    int bestPickAccuracy = 0;
    for (var i = 0; i < meetingPersons.length; i++) {
      int nextAccuracy = calculatePickAccuracyofPerson(meetingPersons[i]);
      if (nextAccuracy > bestPickAccuracy) bestPickAccuracy = nextAccuracy;
    }
    for (var i = 0; i < meetingPersons.length; i++) {
      if (calculatePickAccuracyofPerson(meetingPersons[i]) >= bestPickAccuracy)
        winners[i] = true;
      else
        winners[i] = false;
    }
    print(winners);
    print(meetingPersons);
    print(pickHistoryPerPerson);

    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        SizedBox(
          height: MediaQuery.of(context).size.height * 0.2,
          width: MediaQuery.of(context).size.width * 0.2,
          child: ListView.builder(
            scrollDirection: Axis.vertical,
            shrinkWrap: true,
            itemCount: meetingPersons.length,
            itemBuilder: (context, index) {
              final item = meetingPersons[index];
              return Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  winners[index] ? Text('👑') : Text('😭'),
                  Text(
                    item,
                    textAlign: TextAlign.left,
                  ),
                  Text(
                    calculatePickAccuracyofPersonAsString(meetingPersons[index]),
                    textAlign: TextAlign.right,
                  ),
                ],
              );
            },
          ),
        ),
        Padding(padding: EdgeInsets.all(defaultEdgeInsets)),
        Image.network(
          "https://media.giphy.com/media/10hO3rDNqqg2Xe/giphy.gif",
          width: MediaQuery.of(context).size.width * 0.5,
          fit: BoxFit.fill,
        ),
        Padding(padding: EdgeInsets.all(defaultEdgeInsets)),
        ElevatedButton(
            onPressed: () {
              Navigator.pushNamed(context, "meme");
            },
            child: Text("Bring mich zu den Memes!"))
      ],
    );
  }
}
