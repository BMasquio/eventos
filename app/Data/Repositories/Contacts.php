<?php
namespace App\Data\Repositories;

use App\Data\Models\Contact as ContactModel;

class Contacts extends Repository
{
    /**
     * @var string
     */
    protected $model = ContactModel::class;

    /**
     * @param $personInstitutionId
     * @return mixed
     */
    public function allByPersonInstitutionId($personInstitutionId)
    {
        return $this->getByPersonInstitutionId($personInstitutionId);
    }
}
