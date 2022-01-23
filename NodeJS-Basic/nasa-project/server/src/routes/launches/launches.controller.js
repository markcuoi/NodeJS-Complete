const {
  getAllLaunches,
  addNewLaunch,
  exitsLaunchWithId,
  abortLaunchById,
} = require("../../model/launches.model");

// convert map to json format
// any function start with http return a response of request
function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
  const launch = req.body;

  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.target
  ) {
    return res.status(400).json({
      error: "Missing required launch property",
    });
  }

  // convert launchDate to object because. we have to sent date by string. bs json dont allow send object
  launch.launchDate = new Date(launch.launchDate);
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: "Invalid launch date",
    });
  }

  addNewLaunch(launch);
  return res.status(201).json(launch); // return the data was created
}

function httpAbortLaunch(req, res) {
  //  because: launchesRouter.delete("/:id", httpAbortLaunch);
  const launchId = Number(req.params.id);

  //if launch doesn't exist
  if (!exitsLaunchWithId(launchId)) {
    return res.status(404).json({
      error: "Launch not found",
    });
  }

  //if launch does exist
  const aborted = abortLaunchById(launchId);
  return res.status(200).json(aborted);
}

module.exports = { httpGetAllLaunches, httpAddNewLaunch, httpAbortLaunch };
