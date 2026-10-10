"use strict";
var VotingSystem = /** @class */ (function () {
    function VotingSystem() {
        this.active = false;
        this.activeTimer = null;
        this.votes = new Map();
    }
    VotingSystem.prototype.vote = function (voter, votee) {
        if (this.active) {
            this.votes.set(voter.username, votee);
            voter.tell("Voted for " + votee + "...");
        }
        else {
            voter.tell("Voting hasn't opened yet");
        }
    };
    VotingSystem.prototype.findMostVoted = function () {
        var voteCounts = new Map();
        this.votes.forEach(function (votee) {
            voteCounts.set(votee, (voteCounts.get(votee) || 0) + 1);
        });
        var mostVoted = '';
        var maxVotes = 0;
        var distinct = false;
        voteCounts.forEach(function (count, player) {
            if (count > maxVotes) {
                maxVotes = count;
                mostVoted = player;
                distinct = true;
            }
            else {
                if (count == maxVotes) {
                    distinct = false;
                }
            }
        });
        if (distinct) {
            return mostVoted;
        }
        else {
            return "";
        }
    };
    VotingSystem.prototype.tick = function () {
        if (this.activeTimer) {
            this.activeTimer.tick();
        }
    };
    VotingSystem.prototype.resetVotes = function () {
        this.votes.clear();
    };
    VotingSystem.prototype.repealVote = function (voter) {
        this.votes.delete(voter);
    };
    VotingSystem.prototype.removeVotesFor = function (votee) {
        var _this = this;
        this.votes.forEach(function (v, k) {
            if (v === votee) {
                _this.votes.delete(k);
            }
        });
    };
    VotingSystem.prototype.enable = function () {
        this.active = true;
    };
    VotingSystem.prototype.disable = function (extraCode) {
        if (extraCode === void 0) { extraCode = function () { }; }
        this.active = false;
        extraCode();
        this.activeTimer = null;
    };
    VotingSystem.prototype.isActive = function () {
        return this.active;
    };
    VotingSystem.prototype.setActive = function (activator) {
        this.active = activator;
    };
    VotingSystem.prototype.setActiveFor = function (activeTicks, extraCode) {
        var _this = this;
        if (extraCode === void 0) { extraCode = function () { }; }
        this.enable();
        this.activeTimer = new Timer(activeTicks, function () {
            _this.disable();
            extraCode();
        });
        this.activeTimer.start();
    };
    VotingSystem.prototype.getTimer = function () {
        return this.activeTimer;
    };
    return VotingSystem;
}());
