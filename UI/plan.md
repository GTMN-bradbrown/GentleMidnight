pick which chains to watch

backend should start listening to events
	should record what block it started listening to events on,
	like B (inclusive)
backend should start a "catch up" process
	this should go from the "unknown" block to B - 1
	if no "unknown" block, set "unknown" to deploy block
"catch up" should scan chain in chunks from unknown to target
block looking for events
events found in the "catch up" process shouldn't be worked on
immediately, as the events are trades which may have been processed
later in the "catch up" zone

trades found from the active event listeners can be worked on
immediately

once the "catch up" process is complete, all trades discovered by
said process become workable

need to make a very easy trade, then work it
so I can make the logic the handles detecting and
deleting already worked trades